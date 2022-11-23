import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group } from "three";

const Bottle = () => {
  useEffect(() => {
    let prevScrollY = 0;
    const onScroll = () => {
      if (!myObjectRef.current) {
        return;
      }

      let k = window.scrollY / 300;

      // rotation disabled

      // if (prevScrollY > window.scrollY) {
      //   k = -k;
      // }
      // myObjectRef.current.rotation.y = k;

      containerRef.current!.position.x = k;
      prevScrollY = window.scrollY;
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const myObjectRef = useRef<Group>(null);
  const containerRef = useRef<Group>(null);
  const gltf = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/img/bottle.gltf`
  );

  return (
    <group ref={containerRef}>
      <group ref={myObjectRef}>
        <primitive object={gltf.scene} scale={10} />
      </group>
    </group>
  );
};

export function BoxScene() {
  return (
    <Canvas style={{ height: "500px", position: "fixed" }}>
      <ambientLight intensity={0.3} />
      <directionalLight color='yellow' position={[0, 0, 100]} />
      <Bottle />
    </Canvas>
  );
}
