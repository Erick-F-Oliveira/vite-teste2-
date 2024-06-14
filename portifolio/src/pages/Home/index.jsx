import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <Container>
      
      <section className={styles.home}>
        <div className={styles.presentation}>
          <p>
            Oi oi, sou
            <br />
            <span>Erick F. Oliveira</span>
            <br />
            Dev full stack
          </p>
          <Link to="/sobre"className={`${styles.btn} ${styles.btn_blue}`}>Saiba mais</Link>
        </div>
        <div>
          <figure>
            <img
              className={styles.img_Home}
              src="/dev.svg"
              alt="Imagem da pagina Home"
            />
          </figure>
        </div>
      </section>
      </Container>      
      <Footer />
    </>
  )
}

export default Home
