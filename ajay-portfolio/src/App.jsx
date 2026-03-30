import React from 'react';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import SkillsHero from './components/sections/SkillsHero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';

import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
      <CustomCursor />
      <Navbar />
      
      <main>
        <SkillsHero height={600} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />

        <Contact />
      </main>
    </div>
  );
}

export default App;
