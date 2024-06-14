import styles from "./Container.module.css";
function Container({children}) {
  return (
    <container className={styles.container}>
      <section>
        {children}
      </section>
     
    </container>
  );
}
export default Container;