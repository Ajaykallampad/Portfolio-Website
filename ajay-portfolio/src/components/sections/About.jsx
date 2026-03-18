import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-gray-900 to-[#0a0a0a] z-0"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="glass p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
              Who is <span className="text-cyan-400">Ajay P?</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
              <p>
                I am a dedicated <strong className="text-white font-medium">Software Developer</strong> operating out of Kerala, India. My passion lies in engineering robust backend architectures and highly intuitive user interfaces.
              </p>
              <p>
                Currently serving as a Software Developer at <strong className="text-cyan-400 font-medium">Ahalia International Group</strong>, I specialize in <strong className="text-white font-medium">Odoo ERP Customization</strong> and <strong className="text-white font-medium">Python development</strong>. I excel at bridging the gap between complex business logic and seamless operational workflows.
              </p>
              <p>
                Whether it's designing highly scalable PostgreSQL databases, creating dynamic REST APIs via Django, or utilizing AI automation to streamline processes—I bring ideas to life through code.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Experience', value: '1+ Years', desc: 'Enterprise Systems' },
              { label: 'Projects', value: '10+', desc: 'Completed Successfully' },
              { label: 'Expertise', value: 'Odoo &', desc: 'Python Backends' },
              { label: 'Current Focus', value: 'AI Dev', desc: '& Automation' },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center text-center justify-center hover:bg-white/10 transition-colors border border-gray-800 hover:border-cyan-500/50">
                <div className="text-cyan-500 text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
