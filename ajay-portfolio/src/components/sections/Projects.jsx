import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const projects = [
  {
    title: "Hospital Administration System",
    description: "A comprehensive management system built on Odoo. Features include patient records, appointment scheduling, billing, and inventory tracking.",
    tech: ["Odoo", "Python", "PostgreSQL", "XML"],
    icon: <Monitor className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A scalable e-commerce application with a full administrative backend, secure checkout workflows, and modern UI.",
    tech: ["Django", "Python", "React", "PostgreSQL", "Stripe API"],
    icon: <Monitor className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Smart Attendance System",
    description: "An IoT-integrated attendance tracking application that automates logging via modern hardware endpoints and web dashboards.",
    tech: ["Python", "IoT", "Web Tech", "Django"],
    icon: <Monitor className="w-8 h-8 text-cyan-400" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative w-full">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-cyan-500">Work</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full overflow-hidden relative"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"></div>

              <div className="mb-6">{project.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto mb-6 relative z-10">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-xs font-medium text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-800 relative z-10">
                <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-semibold">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
