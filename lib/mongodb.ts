import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI_CLOUD!
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (!process.env.MONGO_URI_CLOUD) {
  throw new Error('Please add your Mongo URI to .env')
}

if (process.env.NODE_ENV === 'development') {
  // Avoid multiple connections during hot reload
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  // In production
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
