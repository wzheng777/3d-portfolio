import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { SectionType } from '../types';

interface BuildingProps {
  onSelectSide: (section: SectionType) => void;
  activeSection: SectionType | null;
}

const Building: React.FC<BuildingProps> = ({ onSelectSide, activeSection }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState<SectionType | null>(null);

  useFrame((state, delta) => {
    if (meshRef.current && !activeSection) {
      // Gentle floating animation when idle
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 2;
    } else if (meshRef.current && activeSection) {
        // Stop rotation if active, maybe align nicely (optional, managed by camera usually)
    }
  });

  const handlePointerOver = (section: SectionType) => (e: any) => {
    e.stopPropagation();
    setHover(section);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHover(null);
    document.body.style.cursor = 'auto';
  };

  const handleClick = (section: SectionType) => (e: any) => {
    e.stopPropagation();
    onSelectSide(section);
  };

  // Modern material config
  const materialProps = {
    metalness: 0.8,
    roughness: 0.2,
    color: '#334155', // Slate 700
  };

  const highlightColor = '#60a5fa'; // Blue 400

  return (
    <group position={[0, 0, 0]}>
      {/* Central Core - The Building */}
      <mesh ref={meshRef}>
        <boxGeometry args={[4, 8, 4]} />
        <meshStandardMaterial {...materialProps} />
        
        {/* Face 1: Front - Profile */}
        <Face 
          position={[0, 0, 2.01]} 
          rotation={[0, 0, 0]} 
          label="PROFILE" 
          subLabel="Highlights"
          isHovered={hovered === SectionType.PROFILE}
          onClick={handleClick(SectionType.PROFILE)}
          onPointerOver={handlePointerOver(SectionType.PROFILE)}
          onPointerOut={handlePointerOut}
        />

        {/* Face 2: Right - Experience */}
        <Face 
          position={[2.01, 0, 0]} 
          rotation={[0, Math.PI / 2, 0]} 
          label="EXPERIENCE" 
          subLabel="Career History"
          isHovered={hovered === SectionType.EXPERIENCE}
          onClick={handleClick(SectionType.EXPERIENCE)}
          onPointerOver={handlePointerOver(SectionType.EXPERIENCE)}
          onPointerOut={handlePointerOut}
        />

        {/* Face 3: Back - Skills */}
        <Face 
          position={[0, 0, -2.01]} 
          rotation={[0, Math.PI, 0]} 
          label="SKILLS" 
          subLabel="Tech Stack"
          isHovered={hovered === SectionType.SKILLS}
          onClick={handleClick(SectionType.SKILLS)}
          onPointerOver={handlePointerOver(SectionType.SKILLS)}
          onPointerOut={handlePointerOut}
        />

        {/* Face 4: Left - Education */}
        <Face 
          position={[-2.01, 0, 0]} 
          rotation={[0, -Math.PI / 2, 0]} 
          label="EDUCATION" 
          subLabel="& Contact"
          isHovered={hovered === SectionType.EDUCATION}
          onClick={handleClick(SectionType.EDUCATION)}
          onPointerOver={handlePointerOver(SectionType.EDUCATION)}
          onPointerOut={handlePointerOut}
        />
      </mesh>

      {/* Floor Reflection for modern vibe */}
       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
            color="#0f172a" 
            metalness={0.9} 
            roughness={0.1}
            transparent
            opacity={0.8}
        />
      </mesh>
    </group>
  );
};

interface FaceProps {
  position: [number, number, number];
  rotation: [number, number, number];
  label: string;
  subLabel: string;
  isHovered: boolean;
  onClick: (e: any) => void;
  onPointerOver: (e: any) => void;
  onPointerOut: () => void;
}

const Face: React.FC<FaceProps> = ({ position, rotation, label, subLabel, isHovered, onClick, onPointerOver, onPointerOut }) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Interactive Plane */}
            <mesh onClick={onClick} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
                <planeGeometry args={[3.8, 7.8]} />
                <meshStandardMaterial 
                    color={isHovered ? "#1e293b" : "#0f172a"} 
                    emissive={isHovered ? "#3b82f6" : "#000000"}
                    emissiveIntensity={isHovered ? 0.5 : 0}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
            {/* Text Label */}
            <Text
                position={[0, 1, 0.1]}
                fontSize={0.5}
                color={isHovered ? "#ffffff" : "#94a3b8"}
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxM.woff" // Generic web font fallback
            >
                {label}
            </Text>
            <Text
                position={[0, 0.4, 0.1]}
                fontSize={0.2}
                color={isHovered ? "#bfdbfe" : "#64748b"}
                anchorX="center"
                anchorY="middle"
            >
                {subLabel}
            </Text>
            {/* Decorative Lines */}
            <mesh position={[0, -2, 0.1]}>
                <planeGeometry args={[0.1, 2]} />
                <meshBasicMaterial color={isHovered ? "#3b82f6" : "#334155"} />
            </mesh>
        </group>
    )
}

export default Building;