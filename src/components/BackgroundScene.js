/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react';
import { Stars, Plane, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Component for galaxy plane layers
function GalaxyPlane({
  texturePath,
  position,
  size,
  opacity,
  rotationSpeed,
  movementSpeed,
  movementDirection,
}) {
  const texture = useTexture(texturePath);
  const planeRef = useRef();

  useFrame(() => {
    if (planeRef.current) {
      planeRef.current.rotation.z += rotationSpeed;
      planeRef.current.position.x += movementSpeed * movementDirection[0];
      planeRef.current.position.y += movementSpeed * movementDirection[1];

      // Bounds to prevent the plane from moving too far
      if (Math.abs(planeRef.current.position.x) > 50) {
        planeRef.current.position.x = -planeRef.current.position.x;
      }
      if (Math.abs(planeRef.current.position.y) > 30) {
        planeRef.current.position.y = -planeRef.current.position.y;
      }
    }
  });

  return (
    <Plane ref={planeRef} args={size} position={position}>
      <meshStandardMaterial
        map={texture}
        transparent={true}
        opacity={opacity}
        depthWrite={false}
      />
    </Plane>
  );
}

// Main Background Scene component
function BackgroundScene() {
  return (
    <>
      {/* Star field layers */}
      <Stars
        radius={100}
        depth={50}
        count={8000}
        factor={4}
        saturation={0}
        fade={true}
        speed={0.5}
      />
      <Stars
        radius={80}
        depth={30}
        count={3000}
        factor={6}
        saturation={0}
        fade={true}
        speed={0.7}
      />
      <Stars
        radius={150}
        depth={100}
        count={2000}
        factor={5}
        saturation={0}
        fade={true}
        speed={0.3}
      />

      {/* Galaxy planes for additional background elements */}
      <GalaxyPlane
        texturePath='/textures/andromeda.jpg'
        position={[30, -20, -20]}
        size={[12, 12]}
        opacity={1}
        rotationSpeed={0.001}
        movementSpeed={0.01}
        movementDirection={[-1, 1]}
      />
      <GalaxyPlane
        texturePath='/textures/messier101.jpg'
        position={[-20, 20, -25]}
        size={[10, 10]}
        opacity={1}
        rotationSpeed={0.001}
        movementSpeed={0.01}
        movementDirection={[1, 1]}
      />
    </>
  );
}

export default BackgroundScene;
