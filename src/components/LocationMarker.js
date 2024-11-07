/* eslint-disable react/no-unknown-property */

import React, { useRef, useState } from 'react';
import { Sphere, Cylinder, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function LocationMarker({ globeRef, label, lat, lon }) {
  const markerRef = useRef();
  const [showLabel, setShowLabel] = useState(false);

  // Rayon du globe
  const sphereRadius = 5;

  // Convertit la latitude et la longitude en coordonnées cartésiennes sur le globe
  const convertLatLonToPosition = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return [x, y, z];
  };

  // Calcul de la position initiale du marqueur
  const position = convertLatLonToPosition(lat, lon, sphereRadius);

  useFrame(() => {
    if (globeRef.current && markerRef.current) {
      // Positionner le marqueur pour qu'il suive la rotation du globe
      markerRef.current.position.set(...position);
    }
  });

  // Fonction pour gérer le clic sur le marqueur et afficher/masquer le label
  const handleMarkerClick = () => {
    setShowLabel((prev) => !prev); // Toggle pour afficher ou masquer le label
  };

  return (
    <>
      {/* Marqueur (Dot) */}
      <group ref={markerRef} onClick={handleMarkerClick}>
        {/* Tête du marqueur */}
        <Sphere args={[0.08, 16, 16]} position={[0, 0.15, 0]}>
          <meshStandardMaterial color='red' />
        </Sphere>

        {/* Tige du marqueur */}
        <Cylinder args={[0.02, 0.02, 0.3, 16]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color='red' />
        </Cylinder>
      </group>

      {/* Label du texte (affiché uniquement lors du clic) */}
      {showLabel && (
        <Html position={position} occlude={false}>
          <div style={{ color: 'white', fontSize: '0.8em' }}>{label}</div>
        </Html>
      )}
    </>
  );
}

export default LocationMarker;
