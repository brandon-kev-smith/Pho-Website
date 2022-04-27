import React from 'react';
import MenuItem from '../../components/MenuItem';

const FriedRice = () =>{
  return (
    <div>
      <h1 className='title'>Fried Rice</h1>
      <h2 className='title'>COM CHIEN - 프라이드 라이스</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Chicken Fried Rice' 
          nameViet='COM CHIEN GA' 
          nameKorean='콤 치엔 가' 
          value='F1' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Beef Fried Rice' 
          nameViet='COM CHIEN BO' 
          nameKorean='콤 치엔 보' 
          value='F2' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Shrimp Fried Rice' 
          nameViet='COM CHIEN TOM' 
          nameKorean='콤 치엔 탐' 
          value='F3' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Combination Fried Rice' 
          nameViet='COM CHIEN DAC BIET' 
          nameKorean='콤 치엔 닥 비에트' 
          value='F4' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Seafood Fried Rice' 
          nameViet='COM CHIEN DO BIEN' 
          nameKorean='콤 치엔 도 비엔' 
          value='F5' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Tofu Fried Rice' 
          nameViet='COM CHIEN TOFU' 
          nameKorean='콤 치엔 토푸' 
          value='F6' 
          price='$8.50'
        />
      </div> 
    </div>
  );
}
export default FriedRice;