import React from 'react'
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";
const Login = () => {
   

const web3auth = new Web3Auth({
  clientId: "YOUR_WEB3AUTH_CLIENT_ID", // get it from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    chainId: "0x1", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
    rpcTarget: "https://rpc.ankr.com/solana",
    displayName: "Solana Mainnet",
    blockExplorer: "https://explorer.solana.com",
    ticker: "SOL",
    tickerName: "Solana Token",
  },
});
(await web3auth.initModal();)

const web3authProvider = web3auth.connect();

const solanaWallet = new SolanaWallet(web3authProvider); // web3auth.provider
  return (
    <div>Login</div>
  )
}

export default Login