import { motion } from "framer-motion";
import "../index.css";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h1>Construindo um Futuro Melhor</h1>
    </motion.section>
  );
};
export default Hero;