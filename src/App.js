import React from "react";
import { Canvas } from '@react-three/fiber';
import './style.css';
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { OrbitControls, Stars } from "@react-three/drei";

function Box(){
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return(
    <mesh onClick={() => {
      api.velocity.set(0, 5, 0);
    }}
    ref={ref}
    position={[0, 0.5, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color ="hotpink" />
    </mesh>
  );
}

function Plane(){
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return(
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default function App(){
  return(
    <Canvas>
      <ambientLight intensity ={0.5} />
      <spotLight position ={[10, 15, 10]} angle ={0.3} />
      <OrbitControls />
      <Stars />

      <Physics>
        <Box />
        <Plane />
      </Physics>
      
    </Canvas>
  );
};
