import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Projects />

        <About />

        <section id="contact">
          <h1>Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;
