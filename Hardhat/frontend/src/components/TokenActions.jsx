import React from 'react';
import { motion } from 'framer-motion';
import { Send, Plus, Minus, UserPlus, UserX, Shield, ArrowRight } from 'lucide-react';

const TokenActions = ({ 
  transferToken, 
  assignMinter, 
  assignBurner, 
  mintTokens, 
  burnTokens 
}) => {
  const actions = [
    {
      title: "Transfer Tokens",
      description: "Send MCT tokens to another wallet address securely",
      icon: Send,
      action: transferToken,
      color: "from-cyan-600 to-cyan-500",
      hoverColor: "hover:from-cyan-500 hover:to-cyan-400",
      category: "Transaction"
    },
    {
      title: "Assign Minter Role",
      description: "Grant minting privileges to trusted addresses",
      icon: UserPlus,
      action: assignMinter,
      color: "from-green-600 to-green-500",
      hoverColor: "hover:from-green-500 hover:to-green-400",
      category: "Role Management"
    },
    {
      title: "Assign Burner Role",
      description: "Grant token burning privileges for supply control",
      icon: UserX,
      action: assignBurner,
      color: "from-red-600 to-red-500",
      hoverColor: "hover:from-red-500 hover:to-red-400",
      category: "Role Management"
    },
    {
      title: "Mint New Tokens",
      description: "Create new MCT tokens and distribute to addresses",
      icon: Plus,
      action: mintTokens,
      color: "from-blue-600 to-blue-500",
      hoverColor: "hover:from-blue-500 hover:to-blue-400",
      category: "Supply Control"
    },
    {
      title: "Burn Tokens",
      description: "Permanently remove tokens from circulation",
      icon: Minus,
      action: burnTokens,
      color: "from-orange-600 to-orange-500",
      hoverColor: "hover:from-orange-500 hover:to-orange-400",
      category: "Supply Control"
    }
  ];

  return (
    <div className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-cyan-400 mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Token Operations
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Manage your MCT tokens with enterprise-grade security and role-based access control
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full relative overflow-hidden">
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">
                    {action.category}
                  </span>
                </div>

                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${action.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {action.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {action.description}
                </p>

                <motion.button
                  onClick={action.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${action.color} ${action.hoverColor} text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group`}
                >
                  <span>Execute</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cyan-500/10 to-transparent backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Shield className="h-8 w-8 text-cyan-400 mt-1" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-medium text-cyan-400 mb-2">Role-Based Access Control</h4>
                  <p className="text-sm leading-relaxed">
                    All operations are secured by OpenZeppelin's AccessControl. Only authorized addresses can perform minting and burning operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-400 mb-2">Intelligent Fee System</h4>
                  <p className="text-sm leading-relaxed">
                    When total supply exceeds 1,000,000 MCT, a 1% transfer fee is automatically applied to all transactions and sent to the admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenActions;