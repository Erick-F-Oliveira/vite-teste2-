import styles from "./Card.module.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Card({ name, description, url }) {
  return (
    <a href={url}  target="_blank"
      rel="noopener noreferrer">
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>

      <div className={styles.footer}>
        <div className={styles.icons}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
      </div>
    </section>
    </a>
  );
}
export default Card;
