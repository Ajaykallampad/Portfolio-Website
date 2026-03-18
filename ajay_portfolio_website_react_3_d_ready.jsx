// =========================
// AJAY PORTFOLIO WEBSITE
// React + Tailwind + Framer Motion + Three.js
// Ready for GitHub Pages Deployment
// =========================

// 📁 Folder Structure:
// /ajay-portfolio
// ├── public/
// ├── src/
// │   ├── components/
// │   ├── pages/
// │   ├── App.js
// │   ├── main.jsx
// │   └── index.css
// ├── package.json
// └── vite.config.js

// =========================
// package.json
// =========================
{
  "name": "ajay-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.100.0",
    "emailjs-com": "^3.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}

// =========================
// App.js
// =========================
import React from "react";
import Hero from "./components/Hero";
import Skills3D from "./components/Skills3D";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Skills3D />
      <Projects />
      <Contact />
    </div>
  );
}

// =========================
// Hero.jsx
// =========================
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Ajay P
      </motion.h1>
      <p className="mt-4 text-xl">Odoo Developer | Python | AI Enthusiast</p>
    </section>
  );
}

// =========================
// Skills3D.jsx (Floating Skills)
// =========================
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

const skills = [
  "Python",
  "Odoo",
  "Django",
  "AI Automation",
  "Prompt Engineering",
  "PostgreSQL",
  "DevOps",
  "REST APIs"
];

function FloatingText({ text, position }) {
  return (
    <Text position={position} fontSize={0.5} color="white">
      {text}
    </Text>
  );
}

export default function Skills3D() {
  return (
    <section className="h-screen">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        {skills.map((skill, i) => (
          <FloatingText
            key={i}
            text={skill}
            position={[
              Math.sin(i) * 3,
              Math.cos(i) * 3,
              (i % 2) * 2
            ]}
          />
        ))}
      </Canvas>
    </section>
  );
}

// =========================
// Projects.jsx
// =========================
export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5 bg-gray-800 rounded-xl">
          <h3>Hospital System</h3>
          <p>Odoo-based hospital management</p>
        </div>
        <div className="p-5 bg-gray-800 rounded-xl">
          <h3>E-commerce</h3>
          <p>Django full stack app</p>
        </div>
        <div className="p-5 bg-gray-800 rounded-xl">
          <h3>Smart Attendance</h3>
          <p>IoT-based system</p>
        </div>
      </div>
    </section>
  );
}

// =========================
// Contact.jsx (EmailJS)
// =========================
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY"
    );
  };

  return (
    <section className="p-10">
      <h2 className="text-3xl mb-4">Contact Me</h2>
      <form onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="bg-white text-black p-2">Send</button>
      </form>
    </section>
  );
}

// =========================
// Deployment Steps
// =========================
// 1. npm install
// 2. npm run build
// 3. Deploy dist/ to GitHub Pages
// 4. Connect domain ajayp.in

// =========================
// END
// =========================
