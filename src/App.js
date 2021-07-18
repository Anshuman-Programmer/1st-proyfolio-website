import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <section id="hero">
        <Hero/>  
      </section>
      <section id="about">
        <About/>  
      </section>
      <section id="projects">
        <Projects/>  
      </section>
      <section id="contact">
        <Contact/>  
      </section>
      <Footer/>
    </div>
  );
}

export default App;
