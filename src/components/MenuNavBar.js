import React from 'react';
import '../css/MenuNavBar.css'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Appetizers from '../pages/menu/Appetizers';
import Pho from '../pages/menu/Pho';
import Sandwiches from '../pages/menu/Sandwiches';
import Vermicelli from '../pages/menu/Vermicelli';
import RicePlates from '../pages/menu/RicePlates';
import FriedRice from '../pages/menu/FriedRice';
import StirFriedNoodles from '../pages/menu/StirFriedNoodles';
import Beverages from '../pages/menu/Beverages';

const MenuNavBar= () =>{
  return (
      <div>
        <ul>
            <li>
            <Link to="/menu/appetizers">Appetizers</Link>
            </li>
            <li>
            <Link to="/menu/pho">Pho</Link>
            </li>
            <li>
            <Link to="/menu/sandwiches">Sandwiches</Link>
            </li>
            <li>
                <Link to="/menu/vermicelli">Vermicelli</Link>
            </li>
            <li>
                <Link to="/menu/ricePlates">Rice Plates</Link>
            </li>
            <li>
                <Link to="/menu/friedRice">Fried Rice</Link>
            </li>
            <li>
                <Link to="/menu/stirFriedNoodles">Stir Fried Noodles</Link>
            </li>
            <li>
                <Link to="/menu/beverages">Beverages</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/menu/appetizers' element={<Appetizers />} /> 
            <Route path='/menu/Pho' element={<Pho />} /> 
            <Route path='/menu/sandwiches' element={<Sandwiches />} /> 
            <Route path='/menu/vermicelli' element={<Vermicelli />} /> 
            <Route path='/menu/ricePlates' element={<RicePlates />} /> 
            <Route path='/menu/friedRice' element={<FriedRice />} /> 
            <Route path='/menu/stirFriedNoodles' element={<StirFriedNoodles />} /> 
            <Route path='/menu/beverages' element={<Beverages />} /> 
        </Routes>
        <Outlet />
      </div>
  );
}
export default MenuNavBar;