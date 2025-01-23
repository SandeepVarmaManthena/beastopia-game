import { useWallet } from "@txnlab/use-wallet-react";
import { toast as showToast } from 'react-toastify'
import { Wallet } from "@txnlab/use-wallet-react"; // Ensure this import is correct
import { IoClose } from "react-icons/io5";

interface ConnectWalletModalProps {
  wallets: Wallet[];
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal = ({ wallets, isOpen, onClose }: ConnectWalletModalProps) => {
  if (!isOpen) return null;
  const { activeAccount } = useWallet();

  const handleWalletClick = async (wallet: Wallet) => {
    if (wallet.isConnected) {
      wallet.setActive();
      console.log(wallet.activeAccount);
    } else {
      try {
        const account = await wallet.connect();
        console.log(account);
        showToast("Connected to wallet successfully", { type: "success" });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const disconnectWallets = async () => {
    wallets.forEach((wallet) => {
      if (wallet.isConnected) {
        wallet.disconnect();
      }
    });
  };

  return (
    <div onClick={onClose} className="absolute top-[4rem] right-0 bg-gray-800 flex justify-center items-center w-[220px] rounded-lg shadow-lg">
      <div className="modal-container flex flex-col gap-3 w-[100%] p-2" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex flex-row justify-between items-center text-lg font-bold gap-2 py-1 px-0 bg-[#F0A500] text-gray-800 rounded-lg">
          <span className="px-2">Connect to wallet</span>
          <span className="close-button" onClick={onClose}>
            <IoClose className="text-3xl cursor-pointer"/>
          </span>
      </div>

        {wallets.map((wallet) => (
          <div
            onClick={() => handleWalletClick(wallet)}
            key={wallet.id}
            className={`wallet-option ${wallet.activeAccount ? "connected" : null} flex flex-row items-center gap-2 cursor-pointer py-1 px-2 text-lg`}
          >
            <img src={wallet.metadata.icon} alt={`${wallet.metadata.name} Icon`} className="wallet-icon w-[34px] rounded-lg" />
            <span className="text-lg font-bold text-[#F0A500]">
              {`${wallet.metadata.name + ' Wallet'}`}{" "}
              {wallet.activeAccount && `[${wallet.activeAccount.address.slice(0, 3)}...${wallet.activeAccount.address.slice(-3)}]`}
              {wallet.isActive && `(active)`}
            </span>
          </div>
        ))}

        {activeAccount && (
          <div
            onClick={() => disconnectWallets()}
            className={`wallet-option ${activeAccount ? "connected" : null}`}
          >
            <span>Disconnect {activeAccount && `[${activeAccount.address.slice(0, 3)}...${activeAccount.address.slice(-3)}]`}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectWalletModal;


