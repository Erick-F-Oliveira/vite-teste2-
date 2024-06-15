import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import styles from './Error404.module.css'

const Error404 = () => {
  return (
    <>
      <Header />
      <Container>
      <h2 className={styles.error}>404</h2>
      <strong className={styles.strong}>
        Página não encontrada 
      </strong>
      </Container>
      <Footer />
    </>
  );
};

export default Error404;
