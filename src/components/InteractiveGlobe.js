/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingGlobe from './RotatingGlobe'; // Import the RotatingGlobe component

function InteractiveGlobe({ triggerAction }) {
  const [isRotating, setIsRotating] = useState(true);

  // Define actions for controlling rotation
  useEffect(() => {
    if (triggerAction === 'rotate') setIsRotating(true);
    else if (triggerAction === 'stopRotation') setIsRotating(false);
  }, [triggerAction]);

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 10] }} // Ensuring the globe is visible
    >
      {/* Lighting setup for the scene */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Render the Rotating Globe */}
      <RotatingGlobe isRotating={isRotating} triggerAction={triggerAction} />
    </Canvas>
  );
}

export default InteractiveGlobe;