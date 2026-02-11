// import { motion } from "framer-motion";
// import "../styles/Interface.css";
// import { Skills } from "./Skills.jsx"; 
// import Home  from "../pages/Home.jsx";

// import Footer from "./Footer"; // Import the new component

// const Section = ({ children, id }) => (
//   <motion.section
//     id={id}
//     className="section-container"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     viewport={{ once: true }}
//   >
//     {children}
//   </motion.section>
// );

// export default function Interface() {
//   return (
//     <div className="interface-wrapper">
//       {/* 1. HERO SECTION */}
//       <Section id="home">
//         <div className="hero-content">
//           <span className="section-label">Start /</span>
//           <h1 className="title-hero">
//             Hi, IM <span className="highlight-accent">Janhavi Kashyap</span>
//           </h1>
//           <h2 className="subtitle-main">
//             i <i>design</i> and develop web applications
//           </h2>
//           <p className="hero-scroll-text">Let me show You...</p>
//         </div>
//       </Section>

//       {/* 2. SKILLS SECTION */}
//       <Section id="skills">
//         <span className="section-label">Skills /</span>
//         <h2 className="title-neon">TECH_CORE</h2>
//         <div className="skills-interactive-area">
//           <Skills />
//         </div>
//       </Section>

//       {/* 3. CONTACT SECTION */}
//       {/* 3. CONTACT SECTION */}
// <Section id="contact">
//   <div className="contact-portal-container">
//     <span className="section-label">Contact /</span>
//     <h2 className="title-neon" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
//       READY_FOR_COLLABORATION
//     </h2>
//     <p className="subtitle-engineer" style={{ border: 'none', padding: '0', marginBottom: '30px' }}>
//       Have a project in mind or just want to say hi? Let's connect and build something amazing together.
//     </p>
    
//     {/* Animated Portal Button */}
//     <motion.div 
//       className="btn-portal-wrapper"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3 }}
//     >
//       <a href="/contact" className="btn-portal">
//         <span className="btn-text">GET IN TOUCH</span>
//         <span className="btn-icon">→</span>
//         <div className="btn-glitch-layer"></div>
//       </a>
//     </motion.div>
//   </div>
// </Section>
// <Footer />
//     </div>
//   );
// }

import { motion } from "framer-motion";
import "../styles/Interface.css";
import { Skills } from "./Skills.jsx"; 
import Footer from "./Footer"; 

const Section = ({ children, id }) => (
  <motion.section
    id={id}
    className="section-container"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.section>
);

export default function Interface() {
  return (
    <div className="interface-wrapper">
      {/* 1. HERO SECTION */}
      <Section id="home">
        <div className="hero-content">
          <span className="section-label">Start /</span>
          <h1 className="title-hero">
            Hi, IM <span className="highlight-accent">Janhavi Kashyap</span>
          </h1>
          <h2 className="subtitle-main">
            i <i>design</i> and develop web applications
          </h2>
          <p className="hero-scroll-text">Let me show You...</p>
          
          {/* CV Button (Moved logic from hero setup) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ marginTop: '30px', pointerEvents: 'auto' }}
          >
            <a href="/Janhavi_Kashyap_CV.pdf" download className="btn-cv-download">
              <span className="btn-glitch-text">DOWNLOAD_CV</span>
              <span className="btn-scanner-line"></span>
            </a>
          </motion.div>
        </div>
      </Section>

      {/* 2. SKILLS SECTION */}
      <Section id="skills">
        <span className="section-label">Skills /</span>
        <h2 className="title-neon">TECH_CORE</h2>
        <div className="skills-interactive-area">
          <Skills />
        </div>
      </Section>

      {/* 3. CONTACT SECTION */}
      <Section id="contact">
        <div className="contact-portal-container">
          <span className="section-label">Contact /</span>
          <h2 className="title-neon" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            READY_FOR_COLLABORATION
          </h2>
          <p className="subtitle-engineer" style={{ border: 'none', padding: '0', marginBottom: '30px' }}>
            Have a project in mind or just want to say hi? Let's connect and build something amazing together.
          </p>
          
          <motion.div 
            className="btn-portal-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="/contact" className="btn-portal">
              <span className="btn-text">GET IN TOUCH</span>
              <span className="btn-icon">→</span>
              <div className="btn-glitch-layer"></div>
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}