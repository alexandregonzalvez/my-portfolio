/* eslint-disable react/no-unknown-property */

import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundScene from './BackgroundScene';
import RotatingGlobe from './RotatingGlobe';

function InteractiveGlobe({ triggerAction }) {
  const [isRotating, setIsRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const globeRef = useRef();

  // Define actions for controlling rotation
  useEffect(() => {
    if (triggerAction === 'rotate') setIsRotating(true);
    else if (triggerAction === 'stopRotation') setIsRotating(false);
  }, [triggerAction]);

  // Handle zoom changes to control visibility of markers
  const handleWheel = (event) => {
    setZoomLevel((prevZoomLevel) => {
      let newZoomLevel = prevZoomLevel - event.deltaY * 0.001;
      return Math.min(Math.max(newZoomLevel, 0.5), 5);
    });
  };

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'black', // Set background to black for stars visibility
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 20 / zoomLevel] }}
      onWheel={handleWheel}
    >
      {/* Render background scene */}
      <BackgroundScene />

      {/* Lighting setup for the scene */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Render the Rotating Globe */}
      <RotatingGlobe
        ref={globeRef}
        isRotating={isRotating}
        triggerAction={triggerAction}
        zoomLevel={zoomLevel}
      />
    </Canvas>
  );
}

export default InteractiveGlobe;
