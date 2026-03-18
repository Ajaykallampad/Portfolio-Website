import React from 'react';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import AIShowcase from './components/sections/AIShowcase';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <AIShowcase />
        <Contact />
      </main>
    </div>
  );
}

export default App;
