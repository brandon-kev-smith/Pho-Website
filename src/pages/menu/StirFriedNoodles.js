import React from 'react';
import MenuItem from '../../components/MenuItem';

const StirFriedNoodles = () =>{
  return (
    <div>
      <h1 className='title'>Stir Fried Noodles</h1>
      <h2 className='title'>HU TIEU XAO - 스털 프라이드 누들</h2>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Chicken Flat Noodle' 
          nameViet='HU TIEU XAO GA' 
          nameKorean='후 띠에우 짜오 가' 
          value='H1' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Beef Flat Noodle' 
          nameViet='HU TIEU XAO BO' 
          nameKorean='후 띠에우 짜오 보' 
          value='H2' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Combination Flat Noodle' 
          nameViet='HU TIEU XAO THAP CAM' 
          nameKorean='후 띠에오 짜오 타프 캠' 
          value='H3' 
          price='$10.95'
        />
        <MenuItem 
          nameEnglish='Tofu Flat Noodle' 
          nameViet='HU TIEU XAO TOFU' 
          nameKorean='후 띠에오 짜오 토푸' 
          value='H4' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Basil Beef Flat Noodle' 
          nameViet='-HU TIEU XAO BO LA QUE' 
          nameKorean='후 띠에오 짜오 보 라 큐' 
          value='H5' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Chicken Pad Thai Flat Noodle' 
          nameViet='HU TIEU XAO GA PAD THAI' 
          nameKorean='후 띠에우 짜오 가 패드' 
          value='H6' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Shrimp Pad Thai Flat Noodle' 
          nameViet='HU TIEU XAO TOM PAD THAI' 
          nameKorean='후 띠에우 짜오 탐 패드' 
          value='H7' 
          price='$10.95'
        />
        <MenuItem 
          nameEnglish='Wok-Seared Beef and Rice Noodle' 
          nameViet='AP CHAO BO' 
          nameKorean='에이피 차오 보' 
          value='H8' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Wok-Seared Chicken and Rice Noodle' 
          nameViet='-AP CHAO GA' 
          nameKorean='에이피 차오 가' 
          value='H9' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Wok-Seared Shrimp and Rice Noodle' 
          nameViet='AP CHAO TOM' 
          nameKorean='에이피 차오 탐' 
          value='H10' 
          price='$10.95'
        />
        <MenuItem 
          nameEnglish='Wok-Seared Combination and Rice Noodle' 
          nameViet='AP CHAO THAP CAM' 
          nameKorean='에이피 차오 타프 캠' 
          value='H11' 
          price='$10.95'
        />
        <MenuItem 
          nameEnglish='Wok-Seared Seafood and Rice Noodle' 
          nameViet='HU TIEU XAO DO BIEN' 
          nameKorean='후 띠에오 짜오 도 비엔' 
          value='H12' 
          price='$9.95'
        />
        <MenuItem 
          nameEnglish='Pan Fried Combination with Egg Noodle' 
          nameViet='MI XAO THAP CAM' 
          nameKorean='미 짜오 타프 캠' 
          value='H14' 
          price='$10.95'
        />
        <MenuItem 
          nameEnglish='Pan Fried Seafood with Egg Noodle' 
          nameViet='MI XAO DON DO BIEN' 
          nameKorean='미 짜오 돈 두 비엔' 
          value='H15' 
          price='$9.95'
        />
      </div> 
    </div>
  );
}
export default StirFriedNoodles;