import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["Home", "Projects", "Skills", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        zIndex: 100,
        background: "rgba(2, 6, 23, 0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1e293b"
      }}
    >
      <div style={{ color: "#22d3ee", fontWeight: "bold", fontSize: "1.2rem", letterSpacing: "2px" }}>
        JANHAVI.DEV
      </div>
      
      <div style={{ display: "flex", gap: "30px" }}>
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            style={{ 
              color: "#94a3b8", 
              textDecoration: "none", 
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.color = "#22d3ee"}
            onMouseOut={(e) => e.target.style.color = "#94a3b8"}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}