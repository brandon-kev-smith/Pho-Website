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
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='menu/*' element={<Menu />}>
            <Route path='appetizers' element={<Appetizers />} /> 
            <Route path='pho' element={<Pho />} /> 
            <Route path='sandwiches' element={<Sandwiches />} /> 
            <Route path='vermicelli' element={<Vermicelli />} /> 
            <Route path='ricePlates' element={<RicePlates />} /> 
            <Route path='friedRice' element={<FriedRice />} /> 
            <Route path='stirFriedNoodles' element={<StirFriedNoodles />} /> 
            <Route path='beverages' element={<Beverages />} /> 
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;