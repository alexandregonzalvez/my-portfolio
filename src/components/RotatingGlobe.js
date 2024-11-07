import React, { useRef, useEffect } from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Inner component that renders and animates the globe
function RotatingGlobe({ isRotating, triggerAction }) {
  const globeRef = useRef();

  // Load Earth texture from the public folder
  const earthTexture = useTexture('/textures/eo_base_2020_clean_3600x1800.png');

  // Basic rotation effect
  useFrame(() => {
    if (isRotating && globeRef.current) {
      globeRef.current.rotation.y += 0.01; // Speed of rotation
    }
  });

  // Trigger actions for the globe interactions
  useEffect(() => {
    if (triggerAction === 'zoomIn' && globeRef.current) {
      globeRef.current.scale.set(1.5, 1.5, 1.5); // Simple zoom in effect
    } else if (triggerAction === 'zoomOut' && globeRef.current) {
      globeRef.current.scale.set(1, 1, 1); // Reset to normal size
    }
  }, [triggerAction]);

  return (
    <Sphere ref={globeRef} args={[5, 32, 32]}>
      {/* Apply the Earth texture to the sphere */}
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  );
}

export default RotatingGlobe;
