"use client";

import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function IdentityCore() {
  return <group>
    <mesh>
      <icosahedronGeometry args={[1.18, 5]}/>
      <meshPhysicalMaterial color="#9ab7c7" metalness={0.82} roughness={0.18} clearcoat={1} clearcoatRoughness={0.12} emissive="#142c38" emissiveIntensity={0.4}/>
    </mesh>
    <mesh scale={1.014}>
      <icosahedronGeometry args={[1.18, 2]}/>
      <meshBasicMaterial color="#d6e7ee" wireframe transparent opacity={0.27}/>
    </mesh>
    <mesh scale={1.065}>
      <icosahedronGeometry args={[1.18, 1]}/>
      <meshBasicMaterial color="#7ea8bc" wireframe transparent opacity={0.12}/>
    </mesh>
    <mesh position={[0.55, 0.62, 0.48]}>
      <sphereGeometry args={[0.085, 24, 24]}/>
      <meshStandardMaterial color="#f0d4b8" emissive="#e2a970" emissiveIntensity={1.1} metalness={0.45} roughness={0.22}/>
    </mesh>
  </group>;
}

function PortalContents() {
  const group = useRef<THREE.Group>(null);
  const target = useRef(new THREE.Vector2());
  const reducedMotion = useReducedMotion();

  useFrame((_, delta) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.y += (target.current.x * 0.38 - group.current.rotation.y) * Math.min(1, delta * 3.2);
    group.current.rotation.x += (-target.current.y * 0.2 - group.current.rotation.x) * Math.min(1, delta * 3.2);
    group.current.rotation.z += delta * 0.035;
  });

  const move = (event: ThreeEvent<PointerEvent>) => {
    if (event.pointerType !== "mouse" || reducedMotion) return;
    target.current.set(event.pointer.x, event.pointer.y);
  };
  const reset = () => target.current.set(0, 0);

  return <group ref={group} onPointerMove={move} onPointerLeave={reset}>
    <mesh rotation={[0.95, 0.1, 0.18]}>
      <torusGeometry args={[2.15, 0.012, 12, 180]}/>
      <meshStandardMaterial color="#8ca6b2" metalness={0.9} roughness={0.22} emissive="#355365" emissiveIntensity={0.2}/>
    </mesh>
    <mesh rotation={[0.28, 0.62, -0.42]}>
      <torusGeometry args={[2.48, 0.008, 10, 180]}/>
      <meshStandardMaterial color="#d0dce0" metalness={0.85} roughness={0.28} emissive="#384b54" emissiveIntensity={0.12}/>
    </mesh>
    <mesh rotation={[-0.5, 0.25, 0.84]}>
      <torusGeometry args={[1.76, 0.006, 8, 180]}/>
      <meshStandardMaterial color="#c39976" metalness={0.75} roughness={0.3} emissive="#80563b" emissiveIntensity={0.12}/>
    </mesh>
    <Float speed={reducedMotion ? 0 : 0.7} rotationIntensity={reducedMotion ? 0 : 0.08} floatIntensity={reducedMotion ? 0 : 0.18}>
      <IdentityCore/>
    </Float>
    <Sparkles count={70} scale={[6.6, 6.6, 3]} size={1.25} speed={reducedMotion ? 0 : 0.16} opacity={0.42} color="#cadde6"/>
  </group>;
}

export default function PortalScene() {
  const reducedMotion = useReducedMotion();
  return <Canvas camera={{ position: [0, 0, 7.2], fov: 40 }} dpr={[1, 1.25]} frameloop={reducedMotion ? "demand" : "always"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }} fallback={<div className="portal-3d-fallback" aria-hidden="true"><span/></div>}>
    <ambientLight intensity={0.42}/>
    <directionalLight position={[4, 5, 5]} intensity={2.2} color="#e7f2f6"/>
    <pointLight position={[-3, -1, 2]} intensity={20} distance={8} color="#5892b0"/>
    <pointLight position={[2, 3, -2]} intensity={12} distance={7} color="#c18b67"/>
    <PortalContents/>
  </Canvas>;
}
