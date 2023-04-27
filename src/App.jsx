import './App.css'
import ImageGallery from './components/ImageGallery';
import EndlessRunner from './game/EndlessRunner';
import SpriteDisplay from './SpriteDisplay'; // Import the SpriteDisplay component


const App = () => {
  return (
    <div className="App">
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
          <h2>Sprite Display</h2>
          <SpriteDisplay /> {/* Use the SpriteDisplay component */}
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
    </div>
  );
};

export default App;