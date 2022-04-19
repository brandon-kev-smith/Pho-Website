import React from 'react';
import MenuItem from '../../components/MenuItem';
import MenuNavBar from '../../components/MenuNavBar';

const Appetizers = () =>{
  return (
    <div>
      <h1>Appetizers - 애피타이저 - Khai Vi</h1>
      <MenuItem 
        nameEnglish='Vietnamise Egg Rolls [2]' 
        nameViet='CHA GIO' 
        nameKorean='베트남 에그' 
        key='A1' 
        price='$3.25'
      
      />
    </div>
  );
}
export default Appetizers;