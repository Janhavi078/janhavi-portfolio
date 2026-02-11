// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { ScrollControls, Scroll } from '@react-three/drei'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { AnimatePresence } from 'framer-motion'

// // Components
// import Experience from './components/Experience'
// import Interface from './components/Interface' // Skills is inside here!
// import Loader from './components/Loader'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', backgroundColor: '#020617', overflow: 'hidden' }}>
      
//       <Navbar />

//       <AnimatePresence>
//         <Loader />
//       </AnimatePresence>

//       <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
//         <color attach="background" args={['#020617']} />
        
//         <ambientLight intensity={1.2} /> 
//         <directionalLight position={[0, 5, 10]} intensity={1.5} />
//         <pointLight position={[-5, 2, 2]} intensity={1} color="#22d3ee" />

//         {/* pages={5} is correct for: Home, Projects, Skills, Contact + 1 buffer page */}
//         <ScrollControls pages={5} damping={0.1}>
          
//           <Suspense fallback={null}>
//             <gridHelper 
//               args={[20, 20, '#1e293b', '#1e293b']} 
//               position={[0, -2, 0]} 
//               rotation={[Math.PI / 2, 0, 0]} 
//             />
//             <Experience />
//           </Suspense>

//           <Scroll html>
//             <Interface />
//           </Scroll>

//         </ScrollControls>

//         <EffectComposer>
//           <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />
//         </EffectComposer>
        
//       </Canvas>
//     </div>
//   )
// }

// export default App

// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { ScrollControls, Scroll } from '@react-three/drei'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { AnimatePresence } from 'framer-motion'

// // Components
// import Experience from './components/Experience'
// import Interface from './components/Interface' 
// import Loader from './components/Loader'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', backgroundColor: '#020617', overflow: 'hidden' }}>
      
//       <Navbar />

//       <AnimatePresence>
//         <Loader />
//       </AnimatePresence>

//       <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
//         <color attach="background" args={['#020617']} />
        
//         <ambientLight intensity={1.2} /> 
//         <directionalLight position={[0, 5, 10]} intensity={1.5} />
//         <pointLight position={[-5, 2, 2]} intensity={1} color="#22d3ee" />

//         {/* UPDATE: Changed pages to 3. 
//             1: Home, 2: Skills, 3: Contact. 
//             If you want a little extra room at the bottom, use 3.5 
//         */}
//         <ScrollControls pages={3} damping={0.1}>
          
//           <Suspense fallback={null}>
//             <gridHelper 
//               args={[20, 20, '#1e293b', '#1e293b']} 
//               position={[0, -2, 0]} 
//               rotation={[Math.PI / 2, 0, 0]} 
//             />
//             <Experience />
//           </Suspense>

//           <Scroll html>
//             <Interface />
//           </Scroll>

//         </ScrollControls>

//         <EffectComposer>
//           <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />
//         </EffectComposer>
        
//       </Canvas>
//     </div>
//   )
// }

// export default App
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { ScrollControls, Scroll } from '@react-three/drei';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import { AnimatePresence } from 'framer-motion';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components
// import Experience from './components/Experience';
// import Interface from './components/Interface';
// import Loader from './components/Loader';
// import Navbar from './components/Navbar';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <div style={{ width: '100vw', height: '100vh', backgroundColor: '#020617', overflow: 'hidden' }}>
//         <Navbar />
//         <AnimatePresence>
//           <Loader />
//         </AnimatePresence>

//         <Routes>
//           <Route path="/" element={
//             <div style={{ width: '100%', height: '100%' }}>
//               <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
//                 <color attach="background" args={['#020617']} />
//                 <ambientLight intensity={1.2} />
//                 <directionalLight position={[0, 5, 10]} intensity={1.5} />
                
//                 {/* Pages=4: Home, Skills, Contact Portal, +1 Buffer */}
//                 <ScrollControls pages={4} damping={0.1}>
//                   <Suspense fallback={null}>
//                     <Experience />
//                   </Suspense>
//                   <Scroll html>
//                     <Interface />
//                   </Scroll>
//                 </ScrollControls>

//                 <EffectComposer>
//                   <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />
//                 </EffectComposer>
//               </Canvas>
//             </div>
//           } />
          
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#020617', overflow: 'hidden' }}>
        {/* Navbar and Loader will stay visible across all pages */}
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Loader />
        </AnimatePresence>

        <Routes>
          {/* Main Route: 3D Penguin, Hero, and Skills */}
          <Route path="/" element={<Home />} />
          
          {/* Contact Route: Terminal style contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;