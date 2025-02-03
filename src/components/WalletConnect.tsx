import {  useWallet } from "@txnlab/use-wallet-react";
// import * as algokit from "@algorandfoundation/algokit-utils";
// import  { useEffect, useState } from 'react';
import ConnectWalletModal from "./ConnectWalletModal";
import { useState } from "react";

// const NETWORKS = {
//     TESTNET: {
//       id: NetworkId.TESTNET,
//       client: algokit.AlgorandClient.testNet(),
//       label: "Testnet",
//     },
//     MAINNET: {
//       id: NetworkId.MAINNET,
//       client: algokit.AlgorandClient.mainNet(),
//       label: "Mainnet",
//     },
//   } as const;

const WalletConnect = () => {

    const { wallets, activeAccount,  } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [network, setNetwork] = useState<keyof typeof NETWORKS>("TESTNET");
  const formatAddress = (address: string) => `${address.slice(0, 3)}...${address.slice(-3)}`;

  // useEffect(() => {
  //   setActiveNetwork(NETWORKS[network.toUpperCase() as keyof typeof NETWORKS].id);
  // }, [network, setActiveNetwork]);
  
  return (
    <>
        {/* <select onChange={(e) => setNetwork(e.target.value as "TESTNET" | "MAINNET")} className="network_select">
            {Object.entries(NETWORKS).map(([key, value]) => (
            <option key={key.toLowerCase()} value={key.toLowerCase()}>
                {value.label}
            </option>
            ))}
        </select> */}
        <div className="relative second_wrap d-flex justify-content-between align-items-center">
            <button onClick={() => setIsModalOpen(true)} className="connect_wallet_btn text-xl p-2 rounded-lg text-[#F0A500] border-2 border-[#F0A500] hover:bg-[#F0A500] hover:text-gray-800 hover:border-gray-800 transition-all duration-200 ease-in-out border-b-4 cursor-pointer active:scale-90">
            {activeAccount ? `Connected as ${formatAddress(activeAccount.address)}` : "Connect Wallet"}
            </button>
            <ConnectWalletModal wallets={wallets} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    </>
  )
}

export default WalletConnect