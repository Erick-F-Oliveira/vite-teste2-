import styles from "./Card.module.css";
console.log("batata")
function Card() {
  return (
    <section className={styles.card}>
      <h3>Título do projeto</h3>
      <p>Descrição do projeto.</p>

      <div className={styles.footer}>
        <div className={styles.icons}></div>
        
      </div>
    </section>
    
  );
}
export default Card;
