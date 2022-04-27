import React from 'react';
import MenuNavBar from '../components/MenuNavBar';
import { Navigate, useLocation } from 'react-router-dom';

const Menu = () =>{
  if (useLocation().pathname !== '/menu'){
    return (
      <div>
        <MenuNavBar />
      </div>
    )
  }
  else {
    return (
      <div>
        <MenuNavBar />
        <Navigate to="appetizers" />
      </div>
    )
}
}
export default Menu;