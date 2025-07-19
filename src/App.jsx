import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import SkillProgress from './components/SkillProgress';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SkillProgress />
      <Projects />
      {/* This spacer provides scroll room for the last sticky section to un-stick correctly. */}
      <div style={{ height: '50vh' }} />
    </div>
  );
}

export default App
