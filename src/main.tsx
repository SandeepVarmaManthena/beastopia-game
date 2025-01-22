var global;
if (typeof global === 'undefined') { global = window; }

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

import { NetworkId, WalletId, WalletManager, WalletProvider } from "@txnlab/use-wallet-react";

const walletManager = new WalletManager({ 
  wallets: [
    WalletId.DEFLY,
    WalletId.PERA,
  ],
  network: NetworkId.TESTNET,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider manager={walletManager}>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </WalletProvider>
  </React.StrictMode>
);
