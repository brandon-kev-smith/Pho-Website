import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Appetizers from './pages/menu/Appetizers';
import Pho from './pages/menu/Pho';
import Sandwiches from './pages/menu/Sandwiches';
import Vermicelli from './pages/menu/Vermicelli';
import RicePlates from './pages/menu/RicePlates';
import FriedRice from './pages/menu/FriedRice';
import StirFriedNoodles from './pages/menu/StirFriedNoodles';
import Beverages from './pages/menu/Beverages';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/menu' element={<Menu />}>
            <Route path='/menu/appetizers' element={<Appetizers />} /> 
            <Route path='/menu/Pho' element={<Pho />} /> 
            <Route path='/menu/sandwiches' element={<Sandwiches />} /> 
            <Route path='/menu/vermicelli' element={<Vermicelli />} /> 
            <Route path='/menu/ricePlates' element={<RicePlates />} /> 
            <Route path='/menu/friedRice' element={<FriedRice />} /> 
            <Route path='/menu/stirFriedNoodles' element={<StirFriedNoodles />} /> 
            <Route path='/menu/beverages' element={<Beverages />} /> 
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;