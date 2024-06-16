
import styles from "./Contacts.module.css";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function Contacts() {
  return (
    <>
      
        <section className={styles.contacts}>
          <h2>Conatatos Page</h2>
          <h3>Contate-me</h3>
          <div className={styles.icons}>
            <a
              href="https://wa.me/5511949682312"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.icon} />
            </a>
            <a
              href="https://github.com/Erick-F-Oliveira"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/erick-f-oliveira/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin className={styles.icon} />
            </a>           
          </div>
        </section>
      
    </>
  );
}

export default Contacts;
