import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, Loader2, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

// ─────────────────────────────────────────────
// 🔐 CONFIGURATION — replace these placeholders
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_hixtfg2';   // e.g. 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'template_97suyf7';  // e.g. 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY = 'FlIK7NbIAjKtG6ZLM';   // e.g. 'abc123XYZ...'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxI-RJmD1l6Nz1A2T06uf7EcUVCI47ZvD21NVUmxRCtEXeNtxsGAkVlmrrdLNtayrM_2A/exec'; // Paste deployed web app URL here



const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // ── Helpers ──────────────────────────────────────────────────────────────
  const getTimestamp = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return { date, time };
  };

  const sendViaEmailJS = (payload) =>
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      payload,
      EMAILJS_PUBLIC_KEY
    );

  const sendToGoogleSheets = (payload) =>
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',               // Required: GAS doesn't send CORS headers
      headers: { 'Content-Type': 'text/plain' }, // Avoids CORS preflight; body is still JSON
      body: JSON.stringify(payload),
    });

  // ── Form Submit ───────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation for required fields
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMsg('Name and Message are required.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    const { date, time } = getTimestamp();
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim() || 'Not provided',
      phone: formData.phone.trim() || 'Not provided',
      message: formData.message.trim(),
      date,
      time,
    };


    try {
      // 1️⃣ Send email via EmailJS (primary — must succeed)
      await sendViaEmailJS(payload);

      // 2️⃣ Store in Google Sheets (secondary — failure is non-blocking)
      try {
        await sendToGoogleSheets(payload);
      } catch (sheetsErr) {
        // Sheets failure must never block a successful email send
        console.warn(
          'Google Sheets logging failed (non-critical):',
          sheetsErr?.message ?? sheetsErr
        );
      }

      // ✅ Success
      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (emailErr) {
      // EmailJS error objects are { status: number, text: string } — not standard Error
      const detail =
        emailErr?.text ||
        emailErr?.message ||
        (typeof emailErr === 'object' ? JSON.stringify(emailErr) : String(emailErr));
      console.error('EmailJS send failed:', detail);
      setErrorMsg(
        `Failed to send message (${detail}). ` +
        'Please try again or email me directly at ajaykallampad72@gmail.com'
      );
      setStatus('error');
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section id="contact" className="py-24 px-6 relative w-full border-t border-gray-800 bg-[#020202]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">

        {/* ── Contact Info (left panel) ── */}
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
            Whether you have a specific project in mind, need technical consulting, or just want to say hello,
            I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:ajaykallampad72@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 group-hover:border-cyan-500/50">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">ajaykallampad72@gmail.com</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium">Kerala, India</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/Ajaykallampad" target="_blank" rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ajayp72/" target="_blank" rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ajay_mohan._/" target="_blank" rel="noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 transition-all text-gray-400 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Contact Form (right panel) ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3"
        >
          <form onSubmit={handleSubmit} noValidate className="glass p-8 md:p-10 rounded-3xl border border-gray-800 flex flex-col gap-6">

            {/* Name + Email row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 pl-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 disabled:opacity-50"
                  placeholder="Ajay P"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400 pl-1">
                  Your Email <span className="text-gray-600">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 disabled:opacity-50"
                  placeholder="ajaykallampad72@gmail.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 pl-1">
                Phone Number <span className="text-gray-600">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 disabled:opacity-50"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 pl-1">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="bg-black/50 border border-gray-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-600 resize-none disabled:opacity-50"
                placeholder="How can I help you?"
              />
            </div>

            {/* Status banners */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl px-5 py-4 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm font-medium"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-cyan-500 text-black font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
              ) : status === 'success' ? (
                <><CheckCircle className="w-5 h-5" /> Message Sent!</>
              ) : (
                <>Send Message <Send className="w-5 h-5 ml-1" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-32 relative z-10 font-mono">
        © {new Date().getFullYear()} Ajay P
      </div>
    </section>
  );
}
