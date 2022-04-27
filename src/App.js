import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkPage from "./components/WorkPage";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkPage />
      <Contact />
    </div>
  );
}

export default App;
