/* eslint-disable react/no-unknown-property */

/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect, useState } from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import LocationMarker from './LocationMarker';

// Component to render and animate the globe with drag, zoom, and markers
function RotatingGlobe({ isRotating, triggerAction }) {
  const globeRef = useRef();
  const earthTexture = useTexture('/textures/eo_base_2020_clean_3600x1800.png');

  // State for managing drag, zoom, and rotation
  const [isDragging, setIsDragging] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [rotationPaused, setRotationPaused] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Marker data for Paris, Toulouse, and Montréal
  const markers = [
    { label: 'Paris', lat: 48.8566, lon: 2.3522 },
    { label: 'Toulouse', lat: 43.6047, lon: 1.4442 },
    { label: 'Montréal', lat: 45.5017, lon: -73.5673 },
  ];

  // Basic rotation effect (automatic rotation if not dragging or paused)
  useFrame(() => {
    if (!isDragging && isRotating && globeRef.current && !rotationPaused) {
      globeRef.current.rotation.y += 0.01;
    }
    // Apply zoom level to globe
    if (globeRef.current) {
      globeRef.current.scale.set(zoomLevel, zoomLevel, zoomLevel);
    }
  });

  // Handle mouse down (start dragging)
  const handlePointerDown = (event) => {
    setIsDragging(true);
    setInitialMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
    setRotationPaused(true);
  };

  // Handle mouse move (during dragging)
  const handlePointerMove = (event) => {
    if (isDragging && globeRef.current) {
      const deltaX = event.clientX - initialMousePosition.x;
      const deltaY = event.clientY - initialMousePosition.y;

      globeRef.current.rotation.y += deltaX * 0.005;
      globeRef.current.rotation.x += deltaY * 0.005;

      setInitialMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  // Handle mouse up (stop dragging)
  const handlePointerUp = () => {
    setIsDragging(false);
    setRotationPaused(true);

    // Resume rotation after 3 seconds
    setTimeout(() => {
      setRotationPaused(false);
    }, 3000);
  };

  // Handle zoom with mouse wheel
  const handleWheel = (event) => {
    if (event?.preventDefault) event.preventDefault();
    const newZoomLevel = zoomLevel + event.deltaY * -0.001;
    setZoomLevel(Math.min(Math.max(newZoomLevel, 0.8), 3.7));
  };

  // Trigger actions based on external control
  useEffect(() => {
    if (triggerAction === 'zoomIn' && globeRef.current) {
      setZoomLevel(1.2);
    } else if (triggerAction === 'zoomOut' && globeRef.current) {
      setZoomLevel(1);
    }
  }, [triggerAction]);

  return (
    <Sphere
      ref={globeRef}
      args={[5, 32, 32]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
    >
      {/* Apply the Earth texture to the sphere */}
      <meshStandardMaterial map={earthTexture} />

      {/* Render all markers without zoom condition */}
      {markers.map(({ label, lat, lon }) => (
        <LocationMarker
          key={label}
          globeRef={globeRef}
          label={label}
          lat={lat}
          lon={lon}
        />
      ))}
    </Sphere>
  );
}

export default RotatingGlobe;
