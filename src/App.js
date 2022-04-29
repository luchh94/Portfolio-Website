import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkPage from "./components/WorkPage";
import {Helmet} from "react-helmet"
function App() {
  return (
    <div>
      <Helmet title="Lucas Hoffmann | Portfolio"></Helmet>
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
