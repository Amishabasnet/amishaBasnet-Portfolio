
import Navbar from "./components/Navbar";
import Hero from "./section/hero";
import About from "./section/About";
import Skills from "./section/Skills";
import "./App.css";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
