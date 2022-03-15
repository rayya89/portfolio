import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";

// Good
export default function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}
