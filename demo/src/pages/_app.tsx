import '@/styles/globals.css'
import { Suspense } from "react";
import type { AppProps } from 'next/app'
import { Canvas } from "@react-three/fiber";
import { OrbitControls , Environment} from "@react-three/drei";
//import Model from "./assets/3D-Model/Scene";



export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className="App">
      <Canvas>
  <ambientLight intensity={1.25}/>
  <Suspense fallback={null}>
   {/* <Model /> */}
   <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Suspense>
<Environment preset="sunset" />
  <OrbitControls/>
</Canvas>
    </div>
  );
}
