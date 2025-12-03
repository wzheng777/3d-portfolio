import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import Building from './Building';
import { SectionType } from '../types';

interface SceneProps {
  onSelectSide: (section: SectionType) => void;
  activeSection: SectionType | null;
}

const Scene: React.FC<SceneProps> = ({ onSelectSide, activeSection }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [8, 4, 8], fov: 45 }}
      style={{ background: '#0f172a' }} // Slate 900 bg
    >
      <fog attach="fog" args={['#0f172a', 10, 40]} />
      
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Environment preset="city" />
      
      <Building onSelectSide={onSelectSide} activeSection={activeSection} />
      
      {/* Disable controls when viewing content to prevent dizzying movement */}
      <OrbitControls 
        enablePan={false} 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 2}
        autoRotate={!activeSection}
        autoRotateSpeed={0.5}
        enabled={!activeSection} 
      />
    </Canvas>
  );
};

export default Scene;