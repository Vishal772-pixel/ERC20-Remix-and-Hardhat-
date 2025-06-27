import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import getContract from "./contract/contract.js";



function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    const [addr] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(addr);
  };

  const loadBalance = React.useCallback(async () => {
    const contract = await getContract();
    const bal = await contract.balanceOf(account);
    setBalance(ethers.formatUnits(bal, 18));
  }, [account]);

  //  const loadBalance = async () => {
  //   const contract = await getContract();
  //   const bal = await contract.balanceOf(account);
  //   setBalance(ethers.formatUnits(bal, 18));
  // };


// Assign Minter

  const assignMinter = async () => {
    const contract = await getContract();
    const addr = prompt("Enter address to assign as MINTER:");
    const tx = await contract.grantRole(await contract.MINTER_ROLE, addr);
    await tx.wait();
    alert("Minter assigned!");
  };

  //Assign Burner
  const assignBurner = async () => {
    const contract = await getContract();
    const addr = prompt("Enter address to assign as BURNER:");
    const tx = await contract.grantRole(await contract.BURNER_ROLE, addr);
    await tx.wait();
    alert("Burner assigned!");
  };
// Mint Token 
  const mintTokens = async () => {
    const contract = await getContract();
    const to = prompt("Mint to address:");
    const amt = prompt("Amount to mint:");
    const tx = await contract.mint(to, ethers.parseUnits(amt, 18));
    await tx.wait();
    alert("Minted!");
  };
// Burn Token 
  const burnTokens = async () => {
    const contract = await getContract();
    const amt = prompt("Amount to burn:");
    const tx = await contract.burn(ethers.parseUnits(amt, 18));
    await tx.wait();
    alert("Burned!");
  };
// Transfer Token 
  const transferToken = async () => {
    const contract = await getContract();
    const to = prompt("Enter recipient address:");
    const amt = prompt("Amount to send:");
    await contract.transfer(to, ethers.parseUnits(amt, 18));
    await loadBalance();
  };

useEffect(() => {
    if (account) loadBalance();
  }, [account,loadBalance]);

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
          <hr />
          <button onClick={assignMinter}>Assign Minter</button>
          <button onClick={assignBurner}>Assign Burner</button>
          <button onClick={mintTokens}>Mint Tokens</button>
          <button onClick={burnTokens}>Burn Tokens</button>
        </>
      )}
    </div>
  );
}
export default App;
