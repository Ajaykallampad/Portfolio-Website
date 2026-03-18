import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ShieldCheck, Rocket } from 'lucide-react';

const services = [
  {
    title: "Odoo ERP Development",
    desc: "Customizing, implementing, and maintaining scalable Odoo ecosystem solutions tailored to specific business requirements and workflows.",
    icon: <LayoutDashboard className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Backend Engineering",
    desc: "Building rock-solid APIs and backend data structures using Python, Django, and PostgreSQL ensuring top-tier architecture performance.",
    icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />
  },
  {
    title: "Tech Consulting",
    desc: "Providing technical analysis, system audits, and architectural blueprints to accelerate product design and overall process automation.",
    icon: <Rocket className="w-10 h-10 text-cyan-400" />
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
