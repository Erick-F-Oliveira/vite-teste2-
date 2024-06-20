import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projects.module.css";
function Projects() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    const findRepo = async () => {
      const response = await fetch(
        "https://api.github.com/users/Erick-F-Oliveira/repos",
      );
      const data = await response.json();
      setRepositories(data);
    };
    findRepo();
  }, []);

  return (
    <section className={styles.projects}>
      <h2>Meus projetos</h2>
      <br />
      {repositories.length > 0 ? (
        <section className={styles.list}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projects;
