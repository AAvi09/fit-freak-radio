import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LandingPage />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
