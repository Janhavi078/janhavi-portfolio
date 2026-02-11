import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Components
import Experience from '../components/Experience';
import Interface from '../components/Interface';

const Home = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, 10]} intensity={1.5} />
        
        {/* Pages=4 for Home, Skills, Contact Portal */}
        <ScrollControls pages={4} damping={0.1}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>

        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Home;