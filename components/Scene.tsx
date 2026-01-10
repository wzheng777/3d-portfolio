import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import Building from './Building';
import { SectionType } from '../types';
// https://polyhaven.com/a/rogland_clear_night
interface SceneProps {
  onSelectSide: (section: SectionType) => void;
  activeSection: SectionType | null;
}

const Scene: React.FC<SceneProps> = ({ onSelectSide, activeSection }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [8, 4, 8], fov: 45 }}
      style={{ background: '#0c0f16ff' }} // Slate 900 bg
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

      <Environment
        files="moonlit_golf_4k.exr"
        ground={{ height: 5, radius: 40, scale: 30 }}
      />

      <Building onSelectSide={onSelectSide} activeSection={activeSection} />

      {/* Disable controls when viewing content to prevent dizzying movement */}
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate={!activeSection}
        autoRotateSpeed={0.3}
        enabled={!activeSection}
      />
    </Canvas>
  );
};

export default Scene;