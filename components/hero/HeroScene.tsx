"use client";

import { Float, RoundedBox, useTexture } from "@react-three/drei";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function PortraitPanel() {
  const map = useTexture("/images/digital-figure.jpg");
  return <group position={[0, 0, 0.15]}>
    <RoundedBox args={[2.92, 5.54, 0.16]} radius={0.07} smoothness={5} position={[0, 0, -0.12]}>
      <meshStandardMaterial color="#77828a" metalness={0.86} roughness={0.24} />
    </RoundedBox>
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[2.78, 5.40]} />
      <meshBasicMaterial map={map} toneMapped={false} />
    </mesh>
    <mesh position={[0, 0, 0.018]}>
      <planeGeometry args={[2.78, 5.40]} />
      <meshBasicMaterial color="#adc5d2" transparent opacity={0.035} side={THREE.DoubleSide} />
    </mesh>
  </group>;
}

function Orbit({ radius, tube, rotation, color }: { radius: number; tube: number; rotation: [number, number, number]; color: string }) {
  return <mesh rotation={rotation}>
    <torusGeometry args={[radius, tube, 12, 160]} />
    <meshStandardMaterial color={color} metalness={0.9} roughness={0.28} emissive={color} emissiveIntensity={0.14} />
  </mesh>;
}

function SceneContents() {
  const group = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();
  useFrame((_, delta) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.z += delta * 0.012;
  });
  const tilt = (event: ThreeEvent<PointerEvent>) => {
    if (!group.current || event.pointerType !== "mouse" || reducedMotion) return;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -event.pointer.y * 0.12, 0.45);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, event.pointer.x * 0.2, 0.45);
  };
  const reset = () => {
    if (!group.current) return;
    group.current.rotation.x = 0;
    group.current.rotation.y = 0;
  };
  return <group ref={group} onPointerMove={tilt} onPointerLeave={reset}>
    <Orbit radius={3.08} tube={0.012} rotation={[0.32, -0.55, 0.16]} color="#8096a2" />
    <Orbit radius={3.34} tube={0.007} rotation={[-0.48, 0.62, -0.32]} color="#516675" />
    <Orbit radius={2.68} tube={0.006} rotation={[0.9, 0.1, 0.4]} color="#c4d0d5" />
    <mesh position={[2.74, 1.04, 0.38]}>
      <sphereGeometry args={[0.055, 20, 20]} />
      <meshStandardMaterial color="#e5f0f4" metalness={0.8} roughness={0.16} emissive="#93b8cc" emissiveIntensity={0.8} />
    </mesh>
    <mesh position={[-2.8, -1.62, -0.22]}>
      <sphereGeometry args={[0.035, 16, 16]} />
      <meshStandardMaterial color="#d7a579" emissive="#d7a579" emissiveIntensity={0.55} />
    </mesh>
    <Float speed={reducedMotion ? 0 : 0.9} rotationIntensity={reducedMotion ? 0 : 0.035} floatIntensity={reducedMotion ? 0 : 0.12}>
      <PortraitPanel />
    </Float>
  </group>;
}

export default function HeroScene() {
  const reducedMotion = useReducedMotion();
  return <Canvas className="hero-canvas" camera={{ position: [0, 0, 9.2], fov: 38 }} dpr={[1, 1.3]} frameloop={reducedMotion ? "demand" : "always"} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }} fallback={<Image className="webgl-fallback" src="/images/digital-figure.jpg" alt="Abstract digital sculpture artwork." fill sizes="(max-width: 800px) 90vw, 42vw" />}>
    <ambientLight intensity={0.9} />
    <directionalLight position={[4, 5, 6]} intensity={2.1} color="#e8f0f4" />
    <pointLight position={[-4, -1, 3]} intensity={12} distance={9} color="#7096ad" />
    <pointLight position={[3, 3, -1]} intensity={8} distance={8} color="#c19a7b" />
    <Suspense fallback={null}><SceneContents /></Suspense>
  </Canvas>;
}
