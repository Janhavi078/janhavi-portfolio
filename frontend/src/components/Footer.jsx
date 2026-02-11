import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-copyright">© 2026 // JANHAVI KASHYAP</span>
          <span className="footer-status">SYSTEM_STABLE</span>
        </div>
        
        <div className="footer-right">
          <a href="https://github.com/janhavi078" target="_blank" rel="noreferrer" className="footer-link">GITHUB</a>
          <a href="https://www.linkedin.com/in/janhavi-kashyap-385997277/" target="_blank" rel="noreferrer" className="footer-link">LINKEDIN</a>
          <a href="https://youtube.com/@JanhaviGrows" target="_blank" rel="noreferrer" className="footer-link">YOUTUBE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;