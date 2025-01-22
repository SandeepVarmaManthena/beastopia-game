import { NetworkId, useWallet } from "@txnlab/use-wallet-react";
import * as algokit from "@algorandfoundation/algokit-utils";
import  { useEffect, useState } from 'react';
import ConnectWalletModal from "./ConnectWalletModal";

const NETWORKS = {
    TESTNET: {
      id: NetworkId.TESTNET,
      client: algokit.AlgorandClient.testNet(),
      label: "Testnet",
    },
    MAINNET: {
      id: NetworkId.MAINNET,
      client: algokit.AlgorandClient.mainNet(),
      label: "Mainnet",
    },
  } as const;

const WalletConnect = () => {

    const { wallets, activeAccount, setActiveNetwork } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [network, setNetwork] = useState<keyof typeof NETWORKS>("TESTNET");
  const formatAddress = (address: string) => `${address.slice(0, 3)}...${address.slice(-3)}`;

  useEffect(() => {
    setActiveNetwork(NETWORKS[network.toUpperCase() as keyof typeof NETWORKS].id);
  }, [network, setActiveNetwork]);
  
  return (
    <>
    
        <select onChange={(e) => setNetwork(e.target.value as "TESTNET" | "MAINNET")} className="network_select">
            {Object.entries(NETWORKS).map(([key, value]) => (
            <option key={key.toLowerCase()} value={key.toLowerCase()}>
                {value.label}
            </option>
            ))}
        </select>
        <div className="second_wrap">
            <button onClick={() => setIsModalOpen(true)} className="connect_wallet_btn">
            {activeAccount ? `Connected as ${formatAddress(activeAccount.address)}` : "Connect Wallet"}
            </button>
        </div>
        <ConnectWalletModal wallets={wallets} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default WalletConnect