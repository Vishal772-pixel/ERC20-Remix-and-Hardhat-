import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Trophy, GitBranch, MessageSquare, FileText, Image } from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Clock,
      title: "Role-Based Access",
      description: "Lock token operations until specific roles are assigned. Admin controls minter and burner privileges on the blockchain.",
      color: "text-cyan-400"
    },
    {
      icon: Shield,
      title: "Cryptographically Secure",
      description: "All token operations are securely encrypted until unlock conditions are met using OpenZeppelin's battle-tested contracts.",
      color: "text-cyan-400"
    },
    {
      icon: Trophy,
      title: "Fee Mechanisms",
      description: "Set automatic fees to be distributed when your token supply exceeds thresholds or conditions are met.",
      color: "text-yellow-400"
    },
    {
      icon: GitBranch,
      title: "Conditional Operations",
      description: "Create complex conditions for token operations based on on-chain events or community governance votes.",
      color: "text-green-400"
    }
  ];

  const tokenFeatures = [
    {
      icon: MessageSquare,
      title: "Token Transfers",
      description: "Send secure token transfers to any wallet address"
    },
    {
      icon: FileText,
      title: "Role Management",
      description: "Assign and revoke minter/burner roles dynamically"
    },
    {
      icon: Image,
      title: "Supply Control",
      description: "Mint new tokens or burn existing supply with proper authorization"
    }
  ];

  return (
    <div className="py-32 bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Next Evolution of <span className="text-cyan-400">Digital Token Economy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Combine security, flexibility, and advanced mechanics with blockchain permanence for a truly unique
            way to manage digital assets across past, present, and future.
          </p>
        </motion.div>

        {/* Features Grid with Central Orb */}
        <div className="relative mb-32">
          {/* Central Orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/30 to-cyan-400/20 backdrop-blur-sm border border-cyan-500/40 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/40 to-cyan-400/30 backdrop-blur-sm border border-cyan-500/50 flex items-center justify-center">
                    <Shield className="h-16 w-16 text-cyan-400" />
                  </div>
                </div>
              </div>
              
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-cyan-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 ${
                  index < 2 ? 'lg:mr-48' : 'lg:ml-48'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r from-dark-700 to-dark-800 mr-4`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Token Operations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            What You Can Do With Your <span className="text-cyan-400">MCT Tokens</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokenFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-dark-800/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 group-hover:from-cyan-500/30 group-hover:to-cyan-400/30 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;