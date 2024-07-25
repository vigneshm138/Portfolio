import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="main_app">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
