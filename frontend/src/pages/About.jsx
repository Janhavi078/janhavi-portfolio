// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/About.css";

// const About = () => {
//   const bioLines = [
//     "Hi, I'm Janhavi Kashyap — an IT student and developer passionate about building technology that solves real-world problems.",
//     "I enjoy turning ideas into functional products, from interactive web applications to AI-powered solutions. My work focuses on combining clean UI with practical problem-solving.",
//     "I was part of the team that won Smart India Hackathon 2025, where we built a solution addressing real-world challenges. I have also contributed to open-source projects through GirlScript Summer of Code, collaborating with developers and improving production-level code.",
//     "My technical interests include frontend development, modern JavaScript frameworks, DevOps tools, and creating smooth, interactive user experiences.",
//     "I believe in learning by building. Every project I create helps me understand technology deeper and pushes me to grow as a developer.",
//     "My goal is to build impactful digital products that improve accessibility, education, and everyday digital experiences."
//   ];

//   return (
//     <div className="about-page">
//       <div className="about-container">
//         {/* Header Section */}
//         <header className="about-header text-center">
//           <motion.h1 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="glitch-text"
//           >
//             JANHAVI.DEV <span className="highlight">// ABOUT</span>
//           </motion.h1>
//           <div className="badge-container justify-center">
//             <span className="badge winner-badge">🏆 SIH WINNER 2025</span>
//             <span className="badge status-badge">AVAILABLE FOR HIRE</span>
//           </div>
//         </header>

//         {/* Centered Terminal Section */}
//         <main className="terminal-wrapper">
//           <div className="terminal-window">
//             <div className="terminal-header">
//               <div className="window-dots">
//                 <span className="dot red"></span>
//                 <span className="dot yellow"></span>
//                 <span className="dot green"></span>
//               </div>
//               <span className="terminal-title">whoami.sh</span>
//             </div>
//             <div className="terminal-body">
//               {bioLines.map((line, i) => (
//                 <motion.p 
//                   key={i}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.15 }}
//                   className="terminal-line"
//                 >
//                   <span className="prompt">❯</span>{line}
//                 </motion.p>
//               ))}

//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.5 }}
//                 className="mt-20"
//               >
//                 <p className="terminal-heading">⚡ Fun Facts About Me</p>
//                 <div className="facts-grid">
//                   <p><span>⚡</span> Hackathon enthusiast</p>
//                   <p><span>⚡</span> Love exploring new tech</p>
//                   <p><span>⚡</span> Always learning</p>
//                   <p><span>⚡</span> Turning ideas into reality</p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

import React, { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls, Stage } from "@react-three/drei";
import "../styles/About.css";

const PenguinModel = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} />;
};

const About = () => {
  const bioLines = [
    "Hi, I'm Janhavi Kashyap — an IT student and developer passionate about building technology that solves real-world problems.",
    "I enjoy turning ideas into functional products, from interactive web applications to AI-powered solutions. My work focuses on combining clean UI with practical problem-solving.",
    "I was part of the team that won Smart India Hackathon 2025, where we built a solution addressing real-world challenges. I have also contributed to open-source projects through GirlScript Summer of Code, collaborating with developers and improving production-level code.",
    "My technical interests include frontend development, modern JavaScript frameworks, DevOps tools, and creating smooth, interactive user experiences.",
    "I believe in learning by building. Every project I create helps me understand technology deeper and pushes me to grow as a developer.",
    "My goal is to build impactful digital products that improve accessibility, education, and everyday digital experiences."
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <header className="about-header">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glitch-text"
          >
            JANHAVI.DEV <span className="highlight">// ABOUT</span>
          </motion.h1>
          <div className="badge-container">
            <span className="badge winner-badge">🏆 SIH WINNER 2025</span>
            <span className="badge status-badge">AVAILABLE FOR HIRE</span>
          </div>
        </header>

        {/* Grid Container for Terminal (Left) and Model (Right) */}
        <div className="about-content-grid">
          
          {/* Left Column: Terminal */}
          <main className="terminal-wrapper">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">whoami.sh</span>
              </div>
              <div className="terminal-body">
                {bioLines.map((line, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="terminal-line"
                  >
                    <span className="prompt">❯</span>{line}
                  </motion.p>
                ))}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-20"
                >
                  <p className="terminal-heading">⚡ Fun Facts About Me</p>
                  <div className="facts-grid">
                    <p><span>⚡</span> Hackathon enthusiast</p>
                    <p><span>⚡</span> Love exploring new tech</p>
                    <p><span>⚡</span> Always learning</p>
                    <p><span>⚡</span> Turning ideas into reality</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </main>

          {/* Right Column: 3D Model */}
          <div className="model-section">
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.5} contactShadow={true} shadowBias={-0.001}>
                  <PenguinModel />
                </Stage>
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;