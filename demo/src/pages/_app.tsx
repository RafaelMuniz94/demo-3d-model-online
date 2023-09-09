import '@/styles/globals.css'
import * as THREE from "three"
import { Suspense,useEffect,useState } from "react";
import type { AppProps } from 'next/app'
import { Canvas, useFrame} from "@react-three/fiber";
import {Environment, PointMaterial} from "@react-three/drei";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import Model from "./assets/3D-Model/Scene";



export default function App({ Component, pageProps }: AppProps) {
  let options =["cube"]



 useEffect(() => {
    //let canvas = document.getElementById("Canvas") as HTMLCanvasElement | null;
    //if (canvas){
      let app = document.getElementsByClassName("App")[0]
      const scene = new THREE.Scene();
      
      const camera = new THREE.PerspectiveCamera( 50, app.clientWidth / app.clientHeight, 0.1, 1000 );
  
      
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize( app.clientWidth, app.clientHeight );
  
      
      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      camera.position.z = 5;
      const controls = new OrbitControls( camera, renderer.domElement );

  
      controls.update();
      
      function animate() {
      
        requestAnimationFrame( animate );
      
        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();
      
        renderer.render( scene, camera );
      
      }
      
      renderer.render(scene,camera)
      app.appendChild(renderer.domElement)
      animate()
    //}
  })
  
//   let [points,setPoints] =useState<number[]>([])
//   let [canvasHook, setCanvas] = useState<HTMLCanvasElement|null>()
//   let [sceneHook, setScene] = useState<THREE.Scene>(() =>{
//     let scene = new THREE.Scene()

//     const camera = new THREE.PerspectiveCamera()
// //  camera.position.z = 2


//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// //    document.body.appendChild(renderer.domElement);



// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe: true,
// })

// const cube = new THREE.Mesh(geometry, material)
// scene.add(cube)
// //let canvas = document.getElementById("Canvas") as HTMLCanvasElement | null;

// return scene;
// //setCanvas(canvas)

//   })

  

//   function Line (evt: React.MouseEvent<HTMLElement>) {
//     evt.preventDefault()
//     let canvas = canvasHook
    
//     if(canvas){
  
//       if(points.length > 0){
//         console.log("Ali")
//         let pointA = new THREE.Vector3(points[0],points[1])
//         let pointB= new THREE.Vector3();
//         pointB.x = ((evt.clientX - canvas.offsetLeft) / canvas.offsetWidth) * 2 - 1;
//         pointB.y = -((evt.clientY - canvas.offsetTop) / canvas.offsetHeight) * 2 + 1;

//         setPoints([])
  
//         let line =  new THREE.Line( new THREE.BufferGeometry().setFromPoints( [pointA,pointB] ), new THREE.LineBasicMaterial( { color: 0x0000ff } ) );
//         console.log(canvas)
        
//       }else{
//         console.log("Aqui")
//       let point = new THREE.Vector3();
//       point.x = ((evt.clientX - canvas.offsetLeft) / canvas.offsetWidth) * 2 - 1;
//       point.y = -((evt.clientY - canvas.offsetTop) / canvas.offsetHeight) * 2 + 1;
//       setPoints([point.x,point.y])
  
//     }
    
//     }

  
//   }

  return (
    <div className="App" >
      <div className="Panel">
        <div>
          <button>Load</button>
          <Dropdown options={options}
          value={options[0]}
          />
        </div>
      </div>
      {/* <Canvas id='Canvas' onDoubleClick={Line}>
  {/* {/* <ambientLight intensity={1.25}/>
  <Suspense fallback={null}> */}
   {/* <Model /> */}
   {/* <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Suspense>
<Environment preset="sunset" /> 
  <OrbitControls/>
</Canvas> */}
    </div>
  );
}
