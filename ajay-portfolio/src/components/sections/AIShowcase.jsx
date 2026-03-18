import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Workflow } from 'lucide-react';

const aiFeatures = [
  {
    title: "AI-Powered Workflow Optimization",
    desc: "Integrating intelligent decision support systems to automate repetitive tasks and optimize operational workflows.",
    icon: <Workflow className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Advanced Prompt Engineering",
    desc: "Crafting highly structured, context-aware prompts to maximize LLM output efficiency, accuracy, and reliability in production.",
    icon: <Sparkles className="w-8 h-8 text-pink-400" />
  },
  {
    title: "Intelligent Analysis Dashboards",
    desc: "Building data-rich environments where AI interprets complex metrics and provides actionable business insights.",
    icon: <Bot className="w-8 h-8 text-indigo-400" />
  }
];

export default function AIShowcase() {
  return (
    <section id="ai" className="py-24 px-6 relative w-full overflow-hidden">
      {/* Background glow for AI section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 glass text-sm font-medium text-purple-400 mb-6">
            <Sparkles className="w-4 h-4" /> The Future of Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Showcase</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Augmenting traditional software systems with cutting-edge artificial intelligence to create smarter, faster, and more adaptable solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {aiFeatures.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated highlight */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
              
              <div className="mb-6 bg-gray-900/80 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-800 relative z-10">
                {feat.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {feat.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-light relative z-10">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
