import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

const FluidGlass = ({ mode = 'lens', lensProps = {} }) => {
  const [ModelComponent, setModelComponent] = useState(null);

  useEffect(() => {
    let path = '';

    switch (mode) {
      case 'lens':
        path = '/assets/3d/lens.glb';
        break;
      case 'bar':
        path = '/assets/3d/bar.glb';
        break;
      case 'cube':
        path = '/assets/3d/cube.glb';
        break;
      default:
        path = '/assets/3d/lens.glb';
    }

    const loadModel = async () => {
      const { scene } = await useGLTF(path);
      const Model = () => <primitive object={scene} scale={lensProps.scale || 0.25} />;
      setModelComponent(() => Model);
    };

    loadModel();
  }, [mode, lensProps.scale]);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {ModelComponent && <ModelComponent />}
          <Environment preset="sunset" background />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default FluidGlass;
