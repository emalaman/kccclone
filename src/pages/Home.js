import Navbar from "../components/NavBar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Nossos Produtos</h2>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>Conheça nossa linha de produtos sustentáveis.</p>
      </section>
      <Footer />
    </div>
  );
};
export default Home;