import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Kimberly-Clark Clone</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;