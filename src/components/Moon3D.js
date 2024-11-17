import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';


function Moon3d() {
    //const { scene } = useGLTF('/Moon3D.gltf'); // GLTF 파일 경로
  
    return (
        <section id="section3" className="content-item">
        <Canvas
            style={{
            width: '50vw',
            height: '50vw',
            border: '1px solid #fff',
            borderRadius: '50%',
            margin: '0 auto',
            }}
        >
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} />
            {/* <primitive object={scene} scale={[1, 1, 1]} /> */}
            <Stars />
        </Canvas>
        </section>
    );
}

export default Moon3d;
