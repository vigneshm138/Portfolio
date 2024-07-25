import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="main_app">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
