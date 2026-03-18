import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Briefcase, Cpu, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Development",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    skills: ["Python", "Odoo", "Django", "REST APIs", "PostgreSQL", "JavaScript", "React"]
  },
  {
    title: "Odoo Consulting",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    skills: ["ERP Implementation", "Business Analysis", "Process Automation", "Client Solutions", "Module Design"]
  },
  {
    title: "AI & Modern Tech",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    skills: ["Prompt Engineering", "AI Automation", "Workflow Optimization", "Decision Systems"]
  },
  {
    title: "Architecture & Tools",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    skills: ["Database Design", "Git", "Bootstrap", "Angular basics", "CI/CD Awareness"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-6 relative w-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical <span className="text-cyan-500">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
              
              <div className="mb-6 p-4 bg-gray-900/50 rounded-2xl inline-block border border-gray-800">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-400 font-medium flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
