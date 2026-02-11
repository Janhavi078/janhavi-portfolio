import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">janhavi@dev:~/contact</span>
        </div>

        <form className="contact-form">
          <h2 className="form-heading">INITIATE_HANDSHAKE</h2>
          
          <div className="input-group">
            <label>SENDER_ID</label>
            <input type="text" placeholder="Enter Name..." required />
          </div>

          <div className="input-group">
            <label>RETURN_PATH</label>
            <input type="email" placeholder="email@example.com" required />
          </div>

          <div className="input-group">
            <label>TRANSMISSION_DATA</label>
            <textarea rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            EXECUTE_SEND
          </button>
        </form>
      </motion.div>
    </div>
  );
}