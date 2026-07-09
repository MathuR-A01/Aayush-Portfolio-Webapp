"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TravelingShapes() {
  const group = useRef<THREE.Group>(null);
  
  // Generate 25 random shapes (Squares and Rings/Circles)
  const shapes = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 40, // x: spread widely across screen (-20 to 20)
        (Math.random() - 0.5) * 3,  // y: slight vertical variation
        (Math.random() - 0.5) * 5   // z: depth variation
      ],
      // Speed and direction
      speed: (Math.random() + 0.2) * 2,
      direction: Math.random() > 0.5 ? 1 : -1,
      // Shape definition
      type: Math.random() > 0.5 ? "square" : "circle",
      // Color from Sunset Aura palette
      color: ["#FF4D4D", "#FF7B00", "#FFB800", "#FF4FD8"][Math.floor(Math.random() * 4)],
      rotationSpeed: (Math.random() - 0.5) * 3,
      // Random delay before they "activate" (simulating 1-3 sec start times)
      delay: Math.random() * 3,
      timeElapsed: 0
    }));
  }, []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        const shape = shapes[i];
        shape.timeElapsed += delta;

        // Only start moving after the random 1-3 sec delay has passed
        if (shape.timeElapsed > shape.delay) {
          // Travel horizontally
          child.position.x += shape.speed * shape.direction * delta;
          
          // Wrap around screen when they travel too far
          if (child.position.x > 25) child.position.x = -25;
          if (child.position.x < -25) child.position.x = 25;
          
          // Continuous rotation
          child.rotation.x += shape.rotationSpeed * delta;
          child.rotation.y += shape.rotationSpeed * delta;
        }
      });
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position as [number, number, number]}>
          {shape.type === "square" ? (
            <boxGeometry args={[0.3, 0.3, 0.3]} />
          ) : (
            <ringGeometry args={[0.15, 0.25, 32]} />
          )}
          <meshBasicMaterial 
            color={shape.color} 
            transparent 
            opacity={0.4} 
            wireframe={shape.type === "square"} // Wireframe for squares, solid for rings
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function SectionDivider() {
  return (
    <div className="w-full h-24 relative overflow-hidden pointer-events-none border-y border-white/[0.02] bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }} gl={{ alpha: true }}>
          <TravelingShapes />
        </Canvas>
      </div>
    </div>
  );
}
