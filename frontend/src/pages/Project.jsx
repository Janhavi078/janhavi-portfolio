import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/project.css';

const projects = [
  { title: "VEHICLE_PREDICTION", tech: "MERN/ML", link: "https://github.com/Janhavi078/Vehicle_Price_Prediction_Model" },
  { title: "TELHAN_SATHI", tech: "React/IoT", link: "https://github.com/Janhavi078/Telhan-sathi01" },
  { title: "LOG_ALERT_SYSTEM", tech: "Linux/Sec", link: "https://github.com/Janhavi078/-alert-detection-system-for-linux-logs" },
  { title: "GRILLI_RESTAURANT", tech: "UI/UX", link: "https://github.com/Janhavi078/grilli-restraunt-website" },
  { title: "UNILEAP_PLATFORM", tech: "React/OS", link: "https://github.com/janhavi078/unileap" },
  { title: "RESPO_AI", tech: "MERN/AI", link: "https://github.com/Janhavi078/Respo.AI", isUpcoming: true }
];

export default function Projects() {
  return (
    <div className="projects-page compact-layout">
      <div className="projects-container">
        <header className="projects-header">
          <Link to="/" className="back-link">← RET_HOME</Link>
          <h1 className="projects-title">ARTIFACT_INDEX</h1>
        </header>

        <div className="compact-grid">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              key={index}
              className={`compact-card ${project.isUpcoming ? 'upcoming' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="card-top">
                <span className="index">0{index + 1}</span>
                <span className="tech">{project.tech}</span>
              </div>
              <h3 className="name">{project.title}</h3>
              <div className="status-line">
                {project.isUpcoming ? "[ STAGED ]" : "[ DEPLOYED ]"}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}