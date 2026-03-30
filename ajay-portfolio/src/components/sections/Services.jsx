import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Bot } from 'lucide-react';

const services = [
  {
    title: "Odoo ERP Solutions",
    desc: "From requirements gathering to go-live — I design, build, and deploy custom Odoo modules tailored to your business. Whether it's a fresh implementation, version migration, or complex workflow automation, I handle the full cycle including training and post-launch support.",
    icon: <Layers className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Software & Web Development",
    desc: "I build premium websites and complete software solutions that don't just look good — they generate real results. Businesses and personal brands get eye-catching, high-converting websites that attract clients and boost income, paired with powerful backend systems capable of running entire business operations from a single platform.",
    icon: <Globe className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "AI & Automation",
    desc: "I design intelligent systems that work for your business around the clock. From AI-powered workflow automation and multi-agent research pipelines to smart digital marketing engines and agentic decision systems — I turn complex operations into streamlined, self-running processes.",
    icon: <Bot className="w-10 h-10 text-cyan-400" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative w-full bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What I <span className="text-cyan-500">Do</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass p-10 rounded-3xl border border-gray-800 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center mb-6 shadow-inner">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
