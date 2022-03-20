import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";
import "./Styles/Styles.css";

export default function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}
