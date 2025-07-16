import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Globe, Shield, ExternalLink } from 'lucide-react';

const Footer = () => {
  const links = {
    protocol: ['Documentation', 'Security Audit', 'Governance', 'Roadmap'],
    resources: ['Whitepaper', 'API Documentation', 'Developer Guide', 'Community Forum'],
    company: ['About Us', 'Careers', 'Press Kit', 'Contact']
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-dark-950 border-t border-cyan-500/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Shield className="h-10 w-10 text-cyan-400" />
              <span className="text-3xl font-bold text-white">
                MCT Protocol
              </span>
            </motion.div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Advanced ERC20 token implementation with role-based access control and intelligent fee mechanisms. 
              Built on OpenZeppelin standards for maximum security and reliability.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-dark-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Protocol</h3>
            <ul className="space-y-3">
              {links.protocol.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    {item}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    {item}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {links.company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    {item}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 MCT Protocol. Built with security and innovation in mind.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Network Status:</span>
                <span className="text-sm font-medium text-green-400">Operational</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-cyan-400">Ethereum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;