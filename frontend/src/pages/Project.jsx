
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/project.css';

const projects = [
  {
    title: "VEHICLE_PRICE_PREDICTION",
    tech: ["MERN", "Machine Learning", "Python"],
    desc: "A ML-powered model to predict vehicle prices based on historical data.",
    link: "https://github.com/Janhavi078/Vehicle_Price_Prediction_Model"
  },
  {
    title: "SMART_PDS_SYSTEM",
    tech: ["React", "Node.js", "Biometrics"],
    desc: "Biometric fraud detection for public distribution systems (VOIS Hackathon).",
    link: "#"
  },
  {
    title: "UNILEAP_PLATFORM",
    tech: ["Open Source", "React", "Education"],
    desc: "A study platform with free courses listed for students (Hacktoberfest).",
    link: "https://github.com/janhavi078/unileap"
  }
];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <Link to="/" className="back-link">← RETURN_HOME</Link>
          <span className="section-label">Work /</span>
          <h1 className="projects-title">SELECTED_ARTIFACTS</h1>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-header">
                <span className="project-index">0{index + 1}</span>
                <div className="tech-stack">
                  {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
              </div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="view-project">
                VIEW_SOURCE_CODE <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}