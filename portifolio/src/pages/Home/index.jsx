import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="presentation">
          <p>
            Oi oi, sou
            <br />
            <span>Erick F. Oliveira</span>
            <br />
            Dev full stack
          </p>
          <button className="btn btn-blue">Saiba mais</button>
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
