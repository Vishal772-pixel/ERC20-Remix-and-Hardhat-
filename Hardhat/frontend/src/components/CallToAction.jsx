import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Coins } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="py-32 bg-dark-950 relative overflow-hidden">
      {/* 3D Curved Background Elements */}
      <div className="absolute inset-0">
        {/* Left side curves */}
        <div className="absolute left-0 top-0 w-1/3 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className="absolute h-full"
              style={{
                left: `${i * 8}%`,
                width: '2px',
                background: `linear-gradient(to bottom, 
                  rgba(6, 182, 212, ${0.1 + i * 0.05}), 
                  rgba(34, 211, 238, ${0.05 + i * 0.03}), 
                  rgba(6, 182, 212, ${0.1 + i * 0.05})
                )`,
                transform: `perspective(1000px) rotateY(${-45 + i * 3}deg) rotateX(${i * 2}deg)`,
                transformOrigin: 'center center',
              }}
              animate={{
                rotateY: [-45 + i * 3, -35 + i * 3, -45 + i * 3],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Right side curves */}
        <div className="absolute right-0 top-0 w-1/3 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className="absolute h-full"
              style={{
                right: `${i * 8}%`,
                width: '2px',
                background: `linear-gradient(to bottom, 
                  rgba(6, 182, 212, ${0.1 + i * 0.05}), 
                  rgba(34, 211, 238, ${0.05 + i * 0.03}), 
                  rgba(6, 182, 212, ${0.1 + i * 0.05})
                )`,
                transform: `perspective(1000px) rotateY(${45 - i * 3}deg) rotateX(${i * 2}deg)`,
                transformOrigin: 'center center',
              }}
              animate={{
                rotateY: [45 - i * 3, 35 - i * 3, 45 - i * 3],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Center gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-transparent to-dark-950/80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Create Your <span className="text-cyan-400">Digital Token Economy?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of users building secure, role-based token systems for future innovation. 
            Your token economy deserves to be built—even if that economy is meant for tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold text-black transition-all duration-300 group"
            >
              <span>Start Building</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-transparent border border-cyan-500/30 hover:border-cyan-500 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300"
            >
              <span>View Documentation</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-cyan-400 mr-3" />
            <h3 className="text-xl font-semibold text-white">
              Mass Token Launch Event - New Year's 2026
            </h3>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            Join our biggest token deployment event yet! Thousands of ERC20 tokens will launch simultaneously 
            as we enter 2026. Deploy your unique token contract and add your custom features, roles, or fee mechanisms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-cyan-400 mb-2" />
              <div className="text-2xl font-bold text-white">10,000+</div>
              <div className="text-sm text-gray-400">Expected Participants</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Coins className="h-8 w-8 text-green-400 mb-2" />
              <div className="text-2xl font-bold text-white">$50M+</div>
              <div className="text-sm text-gray-400">Total Value Locked</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 text-yellow-400 mb-2" />
              <div className="text-2xl font-bold text-white">365</div>
              <div className="text-sm text-gray-400">Days Until Launch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;