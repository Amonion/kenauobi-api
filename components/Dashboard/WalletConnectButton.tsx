'use client' // for App Router components

import { useState } from 'react'
import { ethers } from 'ethers'

export default function WalletConnectButton() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const connectWallet = async () => {
    try {
      // 1️⃣ Check if MetaMask is installed
      if (!window.ethereum) {
        alert('MetaMask is not installed. Please install it to continue.')
        return
      }

      // 2️⃣ Request account access
      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send('eth_requestAccounts', [])

      // 3️⃣ Get the connected wallet address
      const signer = await provider.getSigner()
      const address = await signer.getAddress()

      setWalletAddress(address)
      console.log('Connected wallet:', address)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  return (
    <div>
      {walletAddress ? (
        <p>Connected wallet: {walletAddress}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Connect MetaMask
        </button>
      )}
    </div>
  )
}
