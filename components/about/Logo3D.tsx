"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { Group } from "three";
import Loading from "@/app/loading";

function Model({ scale }: { scale: [number, number, number] }) {
  const { scene } = useGLTF("/logo.gltf", true);
  const modelRef = useRef<Group>(null);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, -0.7, 0]}
      scale={scale}
    />
  );
}

export default function ImageComp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple window size checker
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can tweak breakpoint
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modelScale: [number, number, number] = isMobile
    ? [0.03, 0.03, 0.03] // smaller on mobile
    : [0.04, 0.04, 0.04]; // bigger on desktop

  const cameraPosition = isMobile
    ? [0, 0, 10] // zoom out a bit on mobile
    : [0, 0, 5]; // closer on desktop

  return (
    <section className="w-full h-[450px] md:h-[500px] bg-transparent md:p-4">
      <Suspense fallback={<Loading className={"h-[450px]"} />}>
        <Canvas
          camera={{
            position: cameraPosition as [number, number, number],
            fov: 50,
          }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Model scale={modelScale} />
          <Environment preset="city" background={false} />
          <OrbitControls
            enableZoom={false}
            enableRotate={true}
            enablePan={false}
            target={[0, 0, 0]}
          />
        </Canvas>
      </Suspense>
    </section>
  );
}
