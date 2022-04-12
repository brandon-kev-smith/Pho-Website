import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;