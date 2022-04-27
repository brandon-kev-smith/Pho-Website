import React from 'react';
import MenuItem from '../../components/MenuItem';

const Vermicelli = () =>{
  return (
    <div>
      <h1 className='title'>Vermicelli</h1>
      <h2 className='title'>BUN - 버미첼리</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Pork' 
          nameViet='BUN THIT NUONG' 
          nameKorean='번 띳또 느엉' 
          value='V1' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Chicken' 
          nameViet='BUN GA NUONG' 
          nameKorean='번 하 느엉' 
          value='V2' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Longrass Beef' 
          nameViet='BUN BO NUONG XA' 
          nameKorean='번 보 느엉 싸' 
          value='V3' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with BBQ Meatball' 
          nameViet='BUN NEM NUONG' 
          nameKorean='번 넴 느엉' 
          value='V4' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Shrimp' 
          nameViet='BUN TOM NUONG' 
          nameKorean='번 탐 느엉' 
          value='V5' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Shrimp, and Egg Rolls' 
          nameViet='BUM TOM NUONG CHA GIO' 
          nameKorean='번 탐 느엉 차 기오' 
          value='V6' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Pork, and Egg Rolls' 
          nameViet='BUN THIT CHA GIO' 
          nameKorean='번 띳또 차 기오' 
          value='V7' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Pork, and Egg Rolls' 
          nameViet='BUN THIT CHA GIO' 
          nameKorean='번 띳또 차 기오' 
          value='V7' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Chicken, and Egg Rolls' 
          nameViet='BUN GA CHA GIO' 
          nameKorean='기오' 
          value='V8' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Beef, and Egg Rolls' 
          nameViet='BUN BO CHA GIO' 
          nameKorean='번 보 차 기오' 
          value='V9' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Shrimp' 
          nameViet='BUN CHAO TOM' 
          nameKorean='번 차오 탐' 
          value='V10' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Spicy Vermicelli with Lemongrass Chicken' 
          nameViet='BUN GA XAO XA OT' 
          nameKorean='번 가 자오 자 오트' 
          value='V11' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Spicy Vermicelli with Lemongrass Beef' 
          nameViet='BUN BO XAO XA OT' 
          nameKorean='번 보 짜오 짜 오트' 
          value='V12' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Grilled Beef Trio' 
          nameViet='BUN BO 3 MON' 
          nameKorean='번 보 쓰리 몬' 
          value='V14' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Shredded Pork, and Egg Rolls' 
          nameViet='BUN BI CHA GIO' 
          nameKorean='번 바이 차 기오' 
          value='V15' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Vermicelli with Egg rolls' 
          nameViet='BUN CHA GIO' 
          nameKorean='번 차 기오' 
          value='V16' 
          price='$8.50'
        />
      </div> 
    </div>
  );
}
export default Vermicelli;