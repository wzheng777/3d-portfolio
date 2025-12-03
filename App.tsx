import React, { useState } from 'react';
import Scene from './components/Scene';
import Overlay from './components/Overlay';
import { SectionType } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType | null>(null);

  const handleSelectSide = (section: SectionType) => {
    setActiveSection(section);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
      {/* 3D Background / Interaction Layer */}
      <div className={`w-full h-full transition-all duration-700 ${activeSection ? 'blur-sm scale-110 opacity-30' : 'opacity-100'}`}>
        <Scene onSelectSide={handleSelectSide} activeSection={activeSection} />
      </div>

      {/* 2D Content Layer */}
      <Overlay activeSection={activeSection} onClose={handleClose} />

      {/* Instructions / Hints */}
      {!activeSection && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none text-slate-400 text-sm animate-pulse tracking-widest uppercase">
          Drag to Rotate &bull; Click Panel to View
        </div>
      )}
    </div>
  );
}

export default App;