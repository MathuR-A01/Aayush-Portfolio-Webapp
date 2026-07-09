"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingSquares() {
  const group = useRef<THREE.Group>(null);
  
  // Generate 50 random squares
  const shapes = useMemo(() => {
    return Array.from({ length: 50 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 60, // x
        (Math.random() - 0.5) * 60, // y
        (Math.random() - 0.5) * 20 - 5 // z (push back to create depth)
      ],
      // Speed and travel direction
      speed: (Math.random() + 0.2) * 1.5,
      direction: [Math.random() > 0.5 ? 1 : -1, Math.random() > 0.5 ? 1 : -1],
      // Colors matching the Sunset Aura
      color: ["#FF4D4D", "#FF7B00", "#FFB800", "#FF4FD8"][Math.floor(Math.random() * 4)],
      rotationSpeed: [(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2],
      size: Math.random() * 0.8 + 0.2 // Random sizes
    }));
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        const shape = shapes[i];
        
        // Travel across screen globally
        child.position.x += shape.speed * shape.direction[0] * delta;
        child.position.y += shape.speed * shape.direction[1] * delta;
        
        // Wrap around screen boundaries seamlessly
        if (child.position.x > 30) child.position.x = -30;
        if (child.position.x < -30) child.position.x = 30;
        if (child.position.y > 30) child.position.y = -30;
        if (child.position.y < -30) child.position.y = 30;
        
        // Continuous 3D rotation
        child.rotation.x += shape.rotationSpeed[0] * delta;
        child.rotation.y += shape.rotationSpeed[1] * delta;
      });
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position as [number, number, number]}>
          <boxGeometry args={[shape.size, shape.size, shape.size]} />
          <meshBasicMaterial 
            color={shape.color} 
            transparent 
            opacity={0.3} 
            wireframe={true} // High-tech wireframe squares
          />
        </mesh>
      ))}
    </group>
  );
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ alpha: true }}>
        <FloatingSquares />
      </Canvas>
    </div>
  );
}
