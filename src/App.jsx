import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
