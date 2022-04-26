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
        <MenuItem 
          nameEnglish='Grilled Lemongrass Chicken' 
          nameViet='COM GA NUONG' 
          nameKorean='콤 가 느엉' 
          key='C2' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Grilled Sliced Beef' 
          nameViet='COM BO NUONG' 
          nameKorean='콤 보 느엉' 
          key='C3' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Grilled Shrimp' 
          nameViet='COM TOM NUONG' 
          nameKorean='콤 탐 느엉' 
          key='C4' 
          price='$9.50'
        />
        <MenuItem 
          nameEnglish='Spicy Lemongrass Chicken Stir Fry' 
          nameViet='COM GA XAO XA OT' 
          nameKorean='콤 가 싸우 싸 오트' 
          key='C6' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Beef and Broccoli' 
          nameViet='COM BO XAO BONG CAI' 
          nameKorean='콤 보 싸오 봉 카이' 
          key='C7' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Pork and Egg Rolls' 
          nameViet='COM THIT CHA GIO' 
          nameKorean='콤 띠또 차 기오' 
          key='C8' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Chicken and Egg Rolls' 
          nameViet='COM GA CHA GIO' 
          nameKorean='콤 가 차 기오' 
          key='C9' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Special Combination' 
          nameViet='COM DAC BIET' 
          nameKorean='콤 박 비에트' 
          key='C10' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Pork Chops with Shredded Pork Skin' 
          nameViet='COM SUON BI CHA' 
          nameKorean='콤 슈온 바이 차' 
          key='C11' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Grilled Beef Trio' 
          nameViet='COM BO 3 MON' 
          nameKorean='콤 보 3 몬' 
          key='C12' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Marinated Deep Fried Comish Hen' 
          nameViet='COM GA CHIEN GION' 
          nameKorean='콤 가 치엔 기온' 
          key='C14' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Steamed Pork Chops' 
          nameViet='COM SUON CHA' 
          nameKorean='콤 슈온 차' 
          key='C15' 
          price='$8.50'
        />
        <MenuItem 
          nameEnglish='Black Pepper Beef' 
          nameViet='COM BO LUC LAC' 
          nameKorean='콤보 룩락' 
          key='C17' 
          price='$9.95'
        />
      </div> 
    </div>
  );
}
export default RicePlates;