import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import ImageGallery from './components/ImageGallery';
import EndlessRunner from './game/EndlessRunner';
import PhysicsPlayground from './components/PhysicsPlayground';
import HarmonographSimulator from './Harmonograph/HarmonographSimulator';
import CryptographyDemo from './cipher/CryptographyDemo';
import Navbar from './components/Navbar';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Home = () => (
  <>
    <header className="App-header">
      <motion.h1 initial="initial" animate="animate" variants={fadeIn}>
        My React Portfolio
      </motion.h1>
    </header>
    <Container>
      <section className="App-section">
        <motion.h2 initial="initial" animate="animate" variants={fadeIn}>
          About Me
        </motion.h2>
        <motion.p initial="initial" animate="animate" variants={fadeIn}>
          I'm a React developer with a passion for creating modern and interactive web applications.
        </motion.p>
      </section>
      <section className="App-section">
        <ImageGallery
          images={[
            {
              thumbnail: 'bdn.png',
              full: 'bdn.png',
            },
            {
              thumbnail: 'bcn.png',
              full: 'bcn.png',
            },
            {
              thumbnail: 'bbn.png',
              full: 'bbn.png',
            },
          ]}
        />
      </section>
      <section className="App-section">
        <HarmonographSimulator />
      </section>
      <section className="App-section">
        <EndlessRunner />
      </section>
      <section className="App-section">
        <motion.h2 initial="initial" animate="animate" variants={fadeIn}>
          Contact
        </motion.h2>
        <motion.p initial="initial" animate="animate" variants={fadeIn}>
          Feel free to reach out to me at:
        </motion.p>
        <motion.p initial="initial" animate="animate" variants={fadeIn}>
          <FontAwesomeIcon icon={faEnvelope} /> Email: my.email@example.com
        </motion.p>
      </section>
    </Container>
    <footer className="App-footer">
      <p>Thank you for visiting my portfolio!</p>
    </footer>
  </>
);

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harmonograph" element={<HarmonographSimulator />} />
          <Route path="/physics-playground" element={<PhysicsPlayground />} />
          <Route path="/cipher" element={<CryptographyDemo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
