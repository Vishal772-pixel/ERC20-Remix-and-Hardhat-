import { useState, useEffect } from "react";
import getContract from "./contract/contract.js";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    const [addr] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(addr);
  };

  const loadBalance = async () => {
    const contract = await getContract();
    const bal = await contract.balanceOf(account);
    setBalance(ethers.formatUnits(bal, 18));
  };

  const transferToken = async () => {
    const contract = await getContract();
    const to = prompt("Enter recipient address:");
    const amt = prompt("Amount to send:");
    await contract.transfer(to, ethers.parseUnits(amt, 18));
    await loadBalance();
  };

  useEffect(() => {
    if (account) loadBalance();
  }, [account]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚀 My ERC20 Token DApp</h2>
      {!account ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <>
          <p><strong>Wallet:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} MCT</p>
          <button onClick={transferToken}>Transfer Tokens</button>
        </>
      )}
    </div>
  );
}

export default App;
