import React from 'react';
import MenuItem from '../../components/MenuItem';

const Sandwiches = () =>{
  return (
    <div>
      <h1 className='title'>Sandwiches</h1>
      <h2 className='title'>BANH MI - 샌드위치</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='French Bread with Grilled Pork' 
          nameViet='BANH MI THIT NUONG' 
          nameKorean='바인 미 타이 느엉' 
          value='B1' 
          price='$3.95'
        />
        <MenuItem 
          nameEnglish='French Bread with Grilled Chicken' 
          nameViet='BANH MI GA NUONG' 
          nameKorean='바인 미 가 느엉' 
          value='B2' 
          price='$3.95'
        />
        <MenuItem 
          nameEnglish='French Bread with Grilled Beef' 
          nameViet='BANH MI BO NUONG' 
          nameKorean='바인 미 보 느엉' 
          value='B3' 
          price='$3.95'
        />
        <MenuItem 
          nameEnglish='French Bread with Tofu' 
          nameViet='BANH MI TOFU' 
          nameKorean='바인 미 토푸' 
          value='B4' 
          price='$3.95'
        />
        <MenuItem 
          nameEnglish='Beef Stew with French Bread' 
          nameViet='BANH MI BO KHO' 
          nameKorean='바인 미 보 호' 
          value='B5' 
          price='$7.75'
        />
      </div> 
    </div>
  );
}
export default Sandwiches;