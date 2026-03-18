import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Software Developer",
    company: "Ahalia International Group",
    period: "Nov 2023 – Present",
    desc: "Spearheaded Odoo ERP customization and Python backend development. Engineered comprehensive business solutions, automated processes, and enhanced PostgreSQL database architectures.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Full Stack Intern",
    company: "Luminar Technolab",
    period: "Previous",
    desc: "Developed Django-based web applications, integrated REST APIs, and managed full-stack delivery from frontend UI creation to backend database schema design.",
    icon: <GraduationCap className="w-5 h-5" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative w-full bg-[#050505] border-y border-white/5">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Career <span className="text-cyan-500">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-gray-800 to-transparent md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-gray-900 border-2 border-cyan-500 text-cyan-500 flex items-center justify-center translate-x-[-1.1rem] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  {exp.icon}
                </div>

                {/* Content Box */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-8 rounded-2xl hover:border-cyan-500/30 transition-colors border border-gray-800 relative group">
                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                    <span className="text-cyan-400 font-mono text-sm font-semibold tracking-wider mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
