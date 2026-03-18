import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with real EmailJS credentials in production
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      // Simulate successful send for now
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 relative w-full border-t border-gray-800 bg-[#020202]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's <span className="text-cyan-500">Connect</span>
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed font-light">
            Whether you have a specific project in mind, need technical consulting, or just want to say hello, I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-6">
            <a href="mailto:ajay@example.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 group-hover:border-cyan-500/50">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">contact@ajayp.in</span>
            </a>
            
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/Ajaykallampad" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ajayp72/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1 block">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3"
        >
          <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl border border-gray-800 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 pl-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 pl-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 pl-1">Message</label>
              <textarea 
                name="message" 
                required 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="mt-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-70 disabled:hover:bg-cyan-500 text-black font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
              ) : status === 'success' ? (
                <>Message Sent!</>
              ) : (
                <>Send Message <Send className="w-5 h-5 ml-1" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-32 relative z-10 font-mono">
        © {new Date().getFullYear()} Ajay P. Developed with React & Three.js.
      </div>
    </section>
  );
}
