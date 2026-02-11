import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const { progress } = useProgress();
  const [showSkip, setShowSkip] = useState(false);
  const [forceEnter, setForceEnter] = useState(false);

  // Show a skip button if it takes more than 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // If loading is done or user forced entry, hide loader
  if (progress === 100 || forceEnter) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "#22d3ee", fontFamily: "monospace", letterSpacing: "4px" }}>
        {progress < 100 ? "INITIALIZING_SYSTEM..." : "READY_TO_LAUNCH"}
      </h2>
      
      <div style={{ width: "300px", height: "2px", background: "#1e293b", margin: "20px 0" }}>
        <motion.div 
          style={{ height: "100%", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee" }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <span style={{ color: "#94a3b8", fontFamily: "monospace" }}>{Math.round(progress)}%</span>

      {showSkip && (
        <button 
          onClick={() => setForceEnter(true)}
          style={{
            marginTop: "30px",
            background: "transparent",
            border: "1px solid #22d3ee",
            color: "#22d3ee",
            padding: "8px 16px",
            cursor: "pointer",
            fontFamily: "monospace"
          }}
        >
          FORCE_ENTER_SITE
        </button>
      )}
    </motion.div>
  );
}