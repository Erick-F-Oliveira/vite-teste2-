import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiReact } from "react-icons/di";
import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.about}>    
        <h2>Sobre mim</h2>
        <div>
          Foto
        </div>
        <div className={styles.description}>
          Irineu<br/>
          <p>Você num sabe nem eu</p>
        </div>
        <div className={styles.icons}>
       <DiNodejsSmall className={styles.node}/>
       <DiJavascript1/>
       <DiHtml5/>
       <DiCss3/>
       <DiMongodb/>
       <DiReact/>
        </div>
     
    </section>
  );
}

export default About;
