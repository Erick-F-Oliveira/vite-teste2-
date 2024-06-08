import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <section className="container">
        <div clasName="presentation">
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
  );
}
export default App;
