import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main style={{ paddingTop: '70px' }}>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="py-5">
          <About />
        </section>
        <section id="gallery" className="py-5 bg-light">
          <Gallery />
        </section>
        <section id="reviews" className="py-5">
          <Reviews />
        </section>
        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;