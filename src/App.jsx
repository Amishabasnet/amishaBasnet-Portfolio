import Navbar from "./components/Navbar";
import Hero from "./section/hero";
import About from "./section/About";

function App(){
  return(
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
export default App;