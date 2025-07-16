import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Zap, DollarSign, Activity } from 'lucide-react';

const Stats = ({ balance }) => {
  const stats = [
    {
      icon: DollarSign,
      label: "AVERAGE COST",
      value: `~$${(parseFloat(balance) * 0.002).toFixed(3)}`,
      subtext: "Per Token",
      color: "text-cyan-400"
    },
    {
      icon: Activity,
      label: "TOTAL TOKENS",
      value: "1,000,000",
      subtext: "On our Chain",
      color: "text-cyan-400"
    },
    {
      icon: Users,
      label: "VALIDATOR NODES",
      value: "3,603",
      subtext: "Active Validators",
      color: "text-cyan-400"
    },
    {
      icon: Shield,
      label: "SECURITY LEVEL",
      value: "Maximum",
      subtext: "Enterprise Grade",
      color: "text-green-400"
    }
  ];

  const features = [
    { label: "Efficient", active: true },
    { label: "Scalable", active: true },
    { label: "Global", active: true },
    { label: "Carbon Neutral", active: true },
    { label: "Sustainability", active: false }
  ];

  return (
    <div className="py-20 bg-dark-900/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Your Balance Card */}
        {balance !== "0" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 max-w-md mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-gray-400">Your Balance</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{balance}</div>
              <div className="text-cyan-400 font-medium">MCT Tokens</div>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
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
                <div className="p-4 rounded-2xl bg-gradient-to-br from-dark-700 to-dark-800 group-hover:from-dark-600 group-hover:to-dark-700 transition-all duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              
              <div className="text-sm text-gray-400 mb-2 font-medium tracking-wide">
                {stat.label}
              </div>
              
              <div className={`text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors ${stat.color}`}>
                {stat.value}
              </div>
              
              <div className="text-gray-500 text-sm">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-800/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Protocol Features</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Built with cutting-edge blockchain technology to ensure maximum security, 
                scalability, and environmental responsibility.
              </p>
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      feature.active
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-gray-500/10 text-gray-400 border-gray-500/30'
                    }`}
                  >
                    {feature.label}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300 font-medium mb-4">Uptime Guarantee</div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      transition={{ delay: 0.5, duration: 1.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;