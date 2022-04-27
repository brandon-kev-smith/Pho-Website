import React from 'react';
import MenuItem from '../../components/MenuItem';

const Beverages = () =>{
  return (
    <div>
      <h1 className='title'>Beverages</h1>
      <h2 className='title'>THUC UONG - 베버리지</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Hot or Cold Coffee with Condensed Milk' 
          nameViet='CAFE SUA DA' 
          nameKorean='카페 수아 다' 
          value='01' 
          price='$3.50'
        />
        <MenuItem 
          nameEnglish='Soybean Milk' 
          nameViet='SUA DAU NANH' 
          nameKorean='수어 다우 난' 
          value='02' 
          price='$3.50'
        />
        <MenuItem 
          nameEnglish='Fresh Lemon Drink' 
          nameViet='DA CHANH' 
          nameKorean='다 짜인' 
          value='03' 
          price='$3.50'
        />
        <MenuItem 
          nameEnglish='Fresh Lemon Ice Tea' 
          nameViet='TRA DA CHANH' 
          nameKorean='트라 다 짜인' 
          value='04' 
          price='$3.50'
        />
        <MenuItem 
          nameEnglish='Thai Iced Tea' 
          nameViet='TRA SUA THAI' 
          nameKorean='트라 수아 타이' 
          value='05' 
          price='$3.75'
        />
        <MenuItem 
          nameEnglish='Coconut Juice' 
          nameViet='NUOC DUA' 
          nameKorean='누옥 두아' 
          value='06' 
          price='$4.00'
        />
        <MenuItem 
          nameEnglish='Lemon Soda' 
          nameViet='SODA CHANH' 
          nameKorean='소다 짜인' 
          value='07' 
          price='$3.50'
        />
        <MenuItem 
          nameEnglish='Soft Drink' 
          nameViet='NUOC NGOT' 
          nameKorean='누옥 응옥' 
          value='08' 
          price='$1.00'
        />
        <MenuItem 
          nameEnglish='Combination Bean Dessert' 
          nameViet='CHE 3 MAU' 
          nameKorean='체 3 마우' 
          value='09' 
          price='$3.75'
        />
        <MenuItem 
          nameEnglish='White Bean Dessert' 
          nameViet='CHE DAU TRANG' 
          nameKorean='체 마우 트랑' 
          value='10' 
          price='$3.75'
        />
        <MenuItem 
          nameEnglish='Red Bean Dessert' 
          nameViet='CHE DAU DO' 
          nameKorean='체 다오 두' 
          value='11' 
          price='$3.75'
        />
      </div> 
    </div>
  );
}
export default Beverages;