import './App.css';
import About from './components/About/About';
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
    </div>
  );
}

export default App;
