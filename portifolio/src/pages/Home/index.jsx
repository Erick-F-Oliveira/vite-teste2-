import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className="presentation">
          <p>
            Oi oi, sou
            <br />
            <span>Erick F. Oliveira</span>
            <br />
            Dev full stack
          </p>
          <Link to="/sobre"className="btn btn-blue">Saiba mais</Link>
        </div>
        <div>
          <figure>
            <img
              className="img-Home"
              src="/dev.svg"
              alt="Imagem da pagina Home"
            />
          </figure>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
