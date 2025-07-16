import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = ({ balance }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
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
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Your Token Economy,</span>
              <br />
              <span className="text-cyan-400">Secured in Blockchain</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Create advanced ERC20 tokens with role-based access control, intelligent fee mechanisms, and enterprise-grade security features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-lg font-semibold text-black transition-all duration-300 group">
                <span>Manage Tokens</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-transparent border border-cyan-500/30 hover:border-cyan-500 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300">
                <span>Explore Protocol</span>
              </button>
            </motion.div>

            {balance !== "0" && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="inline-flex items-center space-x-3 bg-dark-800/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-cyan-500/20"
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Your Balance:</span>
                <span className="text-2xl font-bold text-white">{balance}</span>
                <span className="text-cyan-400 font-medium">MCT</span>
              </motion.div>
            )}
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-1 gap-6"
          >
            {/* Main Token Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Token #MCT001</span>
                </div>
                <span className="text-sm text-gray-400">Active: 2025-12-31</span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-cyan-500/30">
                  <Lock className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secured Token</h3>
                <p className="text-gray-400 text-sm">Role-based access control with advanced permissions</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <TrendingUp className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400 mb-1">TOTAL SUPPLY</div>
                  <div className="text-2xl font-bold text-cyan-400">1,000,000</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <Users className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-400 mb-1">ACTIVE ROLES</div>
                  <div className="text-2xl font-bold text-green-400">3</div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-dark-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400 mb-1">NETWORK STATUS</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Ethereum Mainnet</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">SECURITY</div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-cyan-400" />
                    <span className="text-cyan-400 font-medium">Maximum</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;