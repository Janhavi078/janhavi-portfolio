import { motion } from "framer-motion";

const categories = [
  {
    title: "Development Core",
    id: "01",
    skills: [
      { name: "Frontend Stack", tags: "HTML, CSS, JS, React", level: "95%" },
      { name: "Backend & DB", tags: "Node.js, Express, MongoDB, SQL", level: "85%" },
      { name: "Languages", tags: "Java, Python", level: "80%" }
    ]
  },
  {
    title: "Systems & Cloud",
    id: "02",
    skills: [
      { name: "DevOps & Linux", tags: "Linux, Git, Docker", level: "75%" },
      { name: "Cloud Infrastructure", tags: "AWS (EC2, S3)", level: "70%" }
    ]
  },
  {
    title: "Professional Skills",
    id: "03",
    skills: [
      { name: "Soft Skills", tags: "Public Speaking, Marketing", level: "90%" }
    ]
  }
];

export const Skills = () => {
  return (
    <div style={{ position: 'relative', marginTop: '40px', width: '100%', maxWidth: '900px', pointerEvents: 'auto' }}>
      {categories.map((cat, catIndex) => (
        <div key={catIndex} style={{ marginBottom: '60px', position: 'relative' }}>
          {/* Category Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '0.9rem', opacity: 0.7 }}>{cat.id} //</span>
            <h3 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.2rem', color: '#fff' }}>{cat.title}</h3>
          </div>

          {/* Skills Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', 
            gap: '30px',
            paddingLeft: '20px',
            borderLeft: '1px solid rgba(34, 211, 238, 0.2)' 
          }}>
            {cat.skills.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#f8fafc', fontWeight: 'bold', fontSize: '1rem' }}>{skill.name}</span>
                  <span style={{ color: '#22d3ee', fontFamily: 'monospace' }}>{skill.level}</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '10px', fontFamily: 'monospace' }}>
                  {skill.tags}
                </div>
                {/* Progress Bar */}
                <div style={{ width: '100%', height: '2px', background: 'rgba(30, 41, 59, 0.8)', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ height: '100%', background: '#22d3ee', boxShadow: '0 0 10px #22d3ee' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};