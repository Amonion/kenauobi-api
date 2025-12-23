// pages/api/auth/[...nextauth].ts
import NextAuth, { AuthOptions, Session, User as NextAuthUser } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import { User, UserEmpty } from '@/src/zustand/User'
import { verifyMessage } from 'ethers'

interface EthereumCredentials {
  address: string
  signature: string
}

interface TokenType {
  id?: string
  [key: string]: any
}

interface CustomSession extends Session {
  user: {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    [key: string]: any
  }
}

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Ethereum',
      credentials: {
        address: { label: 'Wallet Address', type: 'text' },
        signature: { label: 'Signature', type: 'text' },
      },
      async authorize(credentials: EthereumCredentials | undefined) {
        if (!credentials) return null

        const { address, signature } = credentials
        const message = 'Login to MyApp'

        const signerAddress = verifyMessage(message, signature)
        if (signerAddress.toLowerCase() !== address.toLowerCase()) return null

        const usersCollection = (await clientPromise)
          .db()
          .collection<User>('users')

        let user = await usersCollection.findOne({
          address: address.toLowerCase(),
        })

        if (!user) {
          const newUser: User = {
            ...UserEmpty,
            address: address.toLowerCase(),
            createdAt: new Date(),
          } as any

          const result = await usersCollection.insertOne(newUser)
          user = { ...newUser, _id: result.insertedId.toString() }
        }

        return {
          id: user._id.toString(),
          address: user.address,
        } as NextAuthUser
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }: { token: TokenType; user?: NextAuthUser }) {
      if (user) token.id = user.id
      return token
    },
    async session({
      session,
      token,
    }: {
      session: Session
      token: TokenType
    }): Promise<CustomSession> {
      const customSession: CustomSession = {
        ...session,
        user: {
          ...(session.user ?? {}),
          id: token.id as string,
        },
      }
      return customSession
    },
  },
}

export default NextAuth(authOptions)
