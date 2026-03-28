import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-gray-900 to-[#0a0a0a] z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 mb-4 tracking-tight">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center flex-col md:flex-row">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="glass p-8 md:p-10 lg:p-12 rounded-3xl lg:col-span-7"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
              Who am <span className="text-cyan-400">I?</span>
            </h3>
            <div className="space-y-4 md:space-y-5 text-gray-400 leading-relaxed font-light text-[17px] md:text-lg">
              <p>
                I’m a <strong className="text-white font-medium">Software Developer</strong> based in Kerala, focused on building clean, efficient, and scalable solutions. With a background in <strong className="text-white font-medium">Full Stack Development</strong> and strong expertise in Odoo ERP, I work across the entire product lifecycle — from gathering requirements and understanding business workflows to designing solutions, development, deployment, and post-launch support and training.
              </p>
              <p>
                I’ve developed complex <strong className="text-white font-medium">Odoo</strong> systems across domains like Hospital Management, Academics, and Finance, along with premium websites and real-world applications that help businesses operate and scale effectively. My approach goes beyond coding — I focus on delivering complete, reliable systems.
              </p>
              <p>
                Alongside development, I bring strong problem-solving, adaptability, and the ability to guide clients and teams through complex challenges with clarity.
              </p>
              <p>
                Currently, I’m exploring the intersection of software and <strong className="text-white font-medium">AI</strong> — building workflow automation systems, research pipelines, and AI-driven solutions that not only respond to business needs but help anticipate them.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:col-span-5"
          >
            {[
              { 
                value: '3+ Years', 
                label: 'Experience', 
                desc: 'Odoo ERP / Full Stack Development',
                color: 'text-cyan-500',
                border: 'hover:border-cyan-500/50',
                delay: 0.1
              },
              { 
                value: 'Strengths', 
                label: 'Core Traits', 
                desc: 'Leadership, Problem Solving, Adaptability',
                color: 'text-cyan-500',
                border: 'hover:border-cyan-500/50',
                delay: 0.2
              },
              { 
                value: 'Tech Stack', 
                label: 'Development', 
                desc: 'Python, Odoo, PostgreSQL, XML, Django, React, API',
                color: 'text-cyan-500',
                border: 'hover:border-cyan-500/50',
                delay: 0.3
              },
              { 
                value: 'Current Focus', 
                label: 'AI Driven', 
                desc: 'Workflow Automation, RAG Pipelines, Digital Marketing, Content Creation, Branding',
                color: 'text-cyan-500',
                border: 'hover:border-cyan-500/50',
                delay: 0.4
              },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: stat.delay + 0.3 }}
                whileHover={{ y: -5 }}
                className={`glass p-6 rounded-2xl flex flex-col items-center text-center justify-center transition-all duration-300 border border-gray-800 bg-white/5 hover:shadow-lg ${stat.border}`}
              >
                <div className={`${stat.color} text-xl sm:text-2xl font-bold mb-2`}>{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs sm:text-sm leading-relaxed">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
