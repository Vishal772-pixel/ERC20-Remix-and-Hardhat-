import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import getContract from "./contract/contract.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TokenActions from "./components/TokenActions.jsx";
import Stats from "./components/Stats.jsx";
import Features from "./components/Features.jsx";
import CallToAction from "./components/CallToAction.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    try {
      const [addr] = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(addr);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const loadBalance = React.useCallback(async () => {
    if (!account) return;
    try {
      const contract = await getContract();
      const bal = await contract.balanceOf(account);
      setBalance(ethers.formatUnits(bal, 18));
    } catch (error) {
      console.error("Failed to load balance:", error);
    }
  }, [account]);

  const assignMinter = async () => {
    try {
      const contract = await getContract();
      const addr = prompt("Enter address to assign as MINTER:");
      if (!addr) return;
      
      const tx = await contract.grantRole(await contract.MINTER_ROLE(), addr);
      await tx.wait();
      alert("Minter assigned successfully!");
    } catch (error) {
      console.error("Failed to assign minter:", error);
      alert("Failed to assign minter. Please try again.");
    }
  };

  const assignBurner = async () => {
    try {
      const contract = await getContract();
      const addr = prompt("Enter address to assign as BURNER:");
      if (!addr) return;
      
      const tx = await contract.grantRole(await contract.BURNER_ROLE(), addr);
      await tx.wait();
      alert("Burner assigned successfully!");
    } catch (error) {
      console.error("Failed to assign burner:", error);
      alert("Failed to assign burner. Please try again.");
    }
  };

  const mintTokens = async () => {
    try {
      const contract = await getContract();
      const to = prompt("Mint to address:");
      const amt = prompt("Amount to mint:");
      if (!to || !amt) return;
      
      const tx = await contract.mint(to, ethers.parseUnits(amt, 18));
      await tx.wait();
      alert("Tokens minted successfully!");
      await loadBalance();
    } catch (error) {
      console.error("Failed to mint tokens:", error);
      alert("Failed to mint tokens. Please check your permissions.");
    }
  };

  const burnTokens = async () => {
    try {
      const contract = await getContract();
      const amt = prompt("Amount to burn:");
      if (!amt) return;
      
      const tx = await contract.burn(account, ethers.parseUnits(amt, 18));
      await tx.wait();
      alert("Tokens burned successfully!");
      await loadBalance();
    } catch (error) {
      console.error("Failed to burn tokens:", error);
      alert("Failed to burn tokens. Please check your permissions.");
    }
  };

  const transferToken = async () => {
    try {
      const contract = await getContract();
      const to = prompt("Enter recipient address:");
      const amt = prompt("Amount to send:");
      if (!to || !amt) return;
      
      const tx = await contract.transfer(to, ethers.parseUnits(amt, 18));
      await tx.wait();
      alert("Transfer completed successfully!");
      await loadBalance();
    } catch (error) {
      console.error("Failed to transfer tokens:", error);
      alert("Failed to transfer tokens. Please try again.");
    }
  };

  useEffect(() => {
    if (account) loadBalance();
  }, [account, loadBalance]);

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Navbar account={account} connectWallet={connectWallet} />
      
      <main className="relative z-10">
        <Hero balance={balance} />
        
        {account && (
          <>
            <Stats balance={balance} />
            <TokenActions
              transferToken={transferToken}
              assignMinter={assignMinter}
              assignBurner={assignBurner}
              mintTokens={mintTokens}
              burnTokens={burnTokens}
            />
          </>
        )}
        
        <Features />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

export default App;