import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield } from 'lucide-react';

const Navbar = ({ account, connectWallet }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Shield className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 animate-pulse bg-cyan-400/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold text-white">
              MCT Protocol
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition-colors">Explore Tokens</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Minted Tokens</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Community</a>
          </div>

          <div className="flex items-center space-x-4">
            {!account ? (
              <motion.button
                onClick={connectWallet}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-medium text-black transition-all duration-300"
              >
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </motion.button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-3 bg-dark-800/50 px-4 py-2 rounded-lg border border-cyan-500/20"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-gray-300">
                  {account.slice(0, 6)}...{account.slice(-4)}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;