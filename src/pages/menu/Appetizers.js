import React from 'react';
import MenuItem from '../../components/MenuItem';
import '../../css/Menues.css';

const Appetizers = () =>{
  return (
    <div>
      <h1 className='title'>Appetizers</h1>
      <h2 className='title'>Khai Vi - 애피타이저</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Vietnamese Egg Rolls [2]' 
          nameViet='CHA GIO' 
          nameKorean='베트남 에그롤' 
          value='A1' 
          price='$3.25'
          />
        <MenuItem 
          nameEnglish='Shrip Spring Rolls [2]'
          nameViet='GOI CUON'
          nameKorean='새우 스프링롤'
          value='A2'
          price='$3.75'
        />
        <MenuItem 
          nameEnglish='Grilled BBQ Meatballs [2]'
          nameViet='NEM NUONG'
          nameKorean='그릴 바베큐 미트볼'
          value='A3'
          price='$4.25'
          />
        <MenuItem 
          nameEnglish='Grilled Pork Rolls [2]'
          nameViet='GOI CUON THIT NUONG'
          nameKorean='포크(돼지고기) 그릴 롤'
          value='A4'
          price='$3.50'
          />
        <MenuItem 
          nameEnglish='Grilled Beef Rolls [2]'
          nameViet='GOI CUON BO NUONG'
          nameKorean='비프(소고기) 그릴 롤'
          value='A6'
          price='$3.75'
          />
        <MenuItem 
          nameEnglish='Tofu Rolls [2]'
          nameViet='GOI CUON TOFU'
          nameKorean='두부 그릴 롤'
          value='A7'
          price='$3.50'
          />
        <MenuItem 
          nameEnglish='Egg rolls, Spring Roll, and Meatball'
          nameViet='3 MON KHAI VI'
          nameKorean='계란롤, 스프링롤, 미트볼'
          value='A8'
          price='$5.50'
          />
        <MenuItem 
          nameEnglish='Shrimp Paste [2]'
          nameViet='CHAO TOM'
          nameKorean='소고기 누들 스프'
          value='A9'
          price='$5.50'
          />
        </div>
    </div>
  );
}
export default Appetizers;