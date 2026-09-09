"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  Mesh,
  Group,
  Color,
} from "three";
import { useMemo, useRef } from "react";

function Atom({ model }: { model: Group }) {
  const ref = useRef<Group>(null);
  const { viewport } = useThree();

  const color1 = useMemo(() => new Color("#2A81FF"), []);
  const color2 = useMemo(() => new Color("#67BED9"), []);

  const materials = useRef<any[]>([]);

  const scene = useMemo(() => {
    const cloned = model.clone(true);

    const modelMaterials: any[] = [];

    cloned.traverse((child) => {
      if (!(child instanceof Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const childMaterials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      for (const material of childMaterials) {
        if ("color" in material) {
          modelMaterials.push(material);
        }
      }
    });

    materials.current = modelMaterials;

    return cloned;
  }, [model]);

  useFrame(({ clock }, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.25;
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.z += delta * 0.15;

    const bpm = 95;
    const beatDuration = 60 / bpm;

    const time = clock.getElapsedTime();

    const progress =
      (Math.sin((time / beatDuration) * Math.PI * 2) + 1) / 2;

    for (const material of materials.current) {
      material.color.lerpColors(
        color1,
        color2,
        progress
      );

      material.needsUpdate = true;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, 0, -5]}
      scale={viewport.width / 5.3}
    />
  );
}

function AtomScene() {
  const model = useLoader(GLTFLoader, "/atom.glb");

  return <Atom model={model.scene} />;
}

export default function ThreeDBackground() {
  return (
    <Canvas
      className="fixed inset-0 -z-10"
      camera={{
        position: [0, 0, 5],
        fov: 60,
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={4}
      />

      <directionalLight
        position={[-5, -2, 3]}
        intensity={2}
      />

      <AtomScene />
    </Canvas>
  );
}