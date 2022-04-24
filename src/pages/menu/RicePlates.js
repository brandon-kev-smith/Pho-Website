import React from 'react';
import MenuItem from '../../components/MenuItem';

const RicePlates = () =>{
  return (
    <div>
      <h1 className='title'>Rice Plates</h1>
      <h2 className='title'>COM - 라이스 플레이트</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Grilled Lemongrass Pork Chops' 
          nameViet='COM SUON NUONG' 
          nameKorean='콤 슈온 느엉' 
          key='C1' 
          price='$8.50'
        />
      </div> 
    </div>
  );
}
export default RicePlates;