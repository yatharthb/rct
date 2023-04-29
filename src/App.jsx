import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ImageGallery from './components/ImageGallery';
import EndlessRunner from './game/EndlessRunner';
import PhysicsPlayground from './components/PhysicsPlayground';
import HarmonographSimulator from './Harmonograph/HarmonographSimulator';
import CryptographyDemo from './cipher/CryptographyDemo';
import Navbar from './components/Navbar';

const Home = () => (
  <>
    <header className="App-header">
      <h1>My React Portfolio</h1>
    </header>
    <section className="App-section">
      <h2>About Me</h2>
      <p>
        I'm a React developer with a passion for creating modern and interactive web applications.
      </p>
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
      <h2>Contact</h2>
      <p>Feel free to reach out to me at:</p>
      <p>Email: my.email@example.com</p>
    </section>
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
