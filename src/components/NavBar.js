import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
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