import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Trajectory from "./components/Trajectory";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;