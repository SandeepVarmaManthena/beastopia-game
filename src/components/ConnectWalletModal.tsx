import React, { useRef, useEffect } from 'react';
import { useWallet } from "@txnlab/use-wallet-react";
import { toast as showToast } from 'react-toastify';
import { Wallet } from "@txnlab/use-wallet-react"; // Ensure this import is correct
import { IoClose } from "react-icons/io5";

interface ConnectWalletModalProps {
  wallets: Wallet[];
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ wallets, isOpen, onClose }) => {
  const { activeAccount } = useWallet();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    <div className="absolute top-[3.6rem] right-0 bg-gray-900 flex justify-center items-center w-[220px] rounded-lg shadow-lg border-2 border-[#F0A500]">
      <div ref={modalRef} className="modal-container flex flex-col gap-3 w-[100%] p-2">
        <div className="modal-header flex flex-row justify-between items-center text-lg font-bold gap-1 py-1 px-0 text-[#F0A500] rounded-lg">
          <span className="px-2">Connect to wallet</span>
          <span className="close-button" onClick={onClose}>
            <IoClose className="text-3xl cursor-pointer" />
          </span>
        </div>

        {wallets.map((wallet) => (
          <div
            onClick={() => handleWalletClick(wallet)}
            key={wallet.id}
            className={`wallet-option ${wallet.activeAccount ? "connected" : ""} flex flex-row items-center gap-2 cursor-pointer py-1 px-2 text-lg hover:opacity-80`}
          >
            <img src={wallet.metadata.icon} alt={`${wallet.metadata.name} Icon`} className="wallet-icon w-[34px] rounded-lg" />
            <span className="text-lg font-bold text-[#F0A500]">
              {`${wallet.metadata.name} Wallet`}{" "}
              {wallet.activeAccount && `[${wallet.activeAccount.address.slice(0, 3)}...${wallet.activeAccount.address.slice(-3)}]`}
            </span>
          </div>
        ))}

        {activeAccount && (
          <div
            onClick={() => disconnectWallets()}
            className={`wallet-option ${activeAccount ? "connected" : ""} bg-[#F0A500] py-1 px-2 rounded-lg cursor-pointer hover:opacity-80`}
          >
            <span className="text-md font-bold text-gray-800">
              Disconnect {activeAccount && `[${activeAccount.address.slice(0, 3)}...${activeAccount.address.slice(-3)}]`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectWalletModal;
