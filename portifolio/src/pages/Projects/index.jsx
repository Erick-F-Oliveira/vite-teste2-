import Card from "../../components/Card";
import styles from "./Projects.module.css";
function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Meus projetos</h2><br/>
      <div className={styles.list}>
        <Card className={styles.card1}/>
        <Card />
        <Card />
        <Card />
        
      </div>
    </section>
  );
}

export default Projects;
