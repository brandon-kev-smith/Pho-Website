import React from 'react';
import MenuItem from '../../components/MenuItem';

const Pho = () =>{
  return (
    <div>
      <h1 className='title'>Pho</h1>
      <h2 className='title'>소고기 누들 스프</h2>
      <h3 className='title'>Small Bowl - $7.75 Big Bowl - $8.75 XL Bowl - $10.75</h3>
      <div className='menuItems'>
        <MenuItem 
          nameEnglish='Special Combination Pho' 
          nameViet='PHO DAC BIET' 
          nameKorean='스폐셜 콤비네이션' 
          key='P1' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, Flank, Fatty Brisket, and Tendon' 
          nameViet='PHO TAI NAM GAU GAN' 
          nameKorean='포타이남가우간' 
          key='P2' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, Flank, and Tendon' 
          nameViet='PHO TAI NAM GAN' 
          nameKorean='타이남간' 
          key='P3' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, and Flank' 
          nameViet='PHO TAI NAM' 
          nameKorean='타이남' 
          key='P4' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, and Brisket' 
          nameViet='PHO TAI CHIN' 
          nameKorean='타이친' 
          key='P5' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, and Meatballs' 
          nameViet='PHO TAI BO VIEN' 
          nameKorean='타이보비엔' 
          key='P6' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, and Tripe' 
          nameViet='PHO TAI SACH' 
          nameKorean='타이사치' 
          key='P7' 
          />
        <MenuItem 
          nameEnglish='Pho with Eye Of Round, Flank, and Fatty Brisket' 
          nameViet='PHO TAI NAM GAU' 
          nameKorean='타이남가우' 
          key='P8' 
          />
          <MenuItem 
          nameEnglish='Pho with Eye Of Round, Flank, and Brisket' 
          nameViet='PHO TAI CHIN NAM' 
          nameKorean='타이친남' 
          key='P9' 
          />
          <MenuItem 
          nameEnglish='Pho with Eye Of Round' 
          nameViet='PHO TAI' 
          nameKorean='타이' 
          key='P10' 
          />
          <MenuItem 
          nameEnglish='Pho with Eye Of Round, Brisket, and Tendon' 
          nameViet='PHO TAI CHIN GAN' 
          nameKorean='타이친간' 
          key='P11' 
          />
          <MenuItem 
          nameEnglish='Pho with Eye Of Round, and Fatty Brisket' 
          nameViet='PHO TAI GAU' 
          nameKorean='타이친간' 
          key='P12' 
          />
          <MenuItem 
          nameEnglish='Pho with Eye Of Round, Fatty Brisket, and Tendon' 
          nameViet='PHO TAI GAU GAN' 
          nameKorean='타이가우간' 
          key='P14' 
          />
          <MenuItem 
          nameEnglish='Pho with Meatballs' 
          nameViet='PHO BO VIEN' 
          nameKorean='포 보 비엔' 
          key='P16' 
          />
          <MenuItem 
          nameEnglish='Pho with Filet Steak [$1.00 Extra]' 
          nameViet='PHO TAI FILET' 
          nameKorean='타이' 
          key='P17' 
          />
          <MenuItem 
          nameEnglish='Pho with Brisket, and Flank' 
          nameViet='PHO CHIN NAM' 
          nameKorean='친 남' 
          key='P18' 
          />
          <MenuItem 
          nameEnglish='Pho with Brisket, Flank, and Tendon' 
          nameViet='PHO CHIN NAM GAN' 
          nameKorean='친 남 간' 
          key='P19' 
          />
          <MenuItem 
          nameEnglish='Pho with Brisket, Flank, and Tripe' 
          nameViet='PHO CHIN NAM SACH' 
          nameKorean='친 남 사치' 
          key='P20' 
          />
          <MenuItem 
          nameEnglish='Pho with Brisket, Flank, Fatty Brisket, Tendon and Tripe' 
          nameViet='PHO CHINH NAM GAU GAN SACH' 
          nameKorean='친남 가우 간 사치' 
          key='P21' 
          />
          <MenuItem 
          nameEnglish='Chicken Pho, with Curry' 
          nameViet='PHO GA CARI' 
          nameKorean='포 가 커리' 
          key='P23' 
          />
          <MenuItem 
          nameEnglish='Chicken Noodle in Clear Soup' 
          nameViet='MIEN GA' 
          nameKorean='미엔 가' 
          key='P24' 
          />
          <MenuItem 
          nameEnglish='Pho with Shrimp' 
          nameViet='PHO TOM' 
          nameKorean='포 탐' 
          key='P25' 
          />
          <MenuItem 
          nameEnglish='Chicken Pho with Eye of Round, and Shrimp' 
          nameViet='PHO TOM TAI GA' 
          nameKorean='포 탐 타이 가' 
          key='P26' 
          />
          <MenuItem 
          nameEnglish='Chicken Noodle with Egg' 
          nameViet='MI GA' 
          nameKorean='미 가' 
          key='P27' 
          />
          <MenuItem 
          nameEnglish='Seafood Pho' 
          nameViet='PHO DO BIEN' 
          nameKorean='포 도 비엔' 
          key='P28' 
          />
          <MenuItem 
          nameEnglish='Pho with Spicy Filet Steak' 
          nameViet='PHO CAY BO HUE' 
          nameKorean='포 카이 보 휴' 
          key='P29' 
          />
          <MenuItem 
          nameEnglish='Spicy Seafood Pho' 
          nameViet='PHO CAY DO BIEN' 
          nameKorean='포 카이 도 비엔' 
          key='P30' 
          />
          <MenuItem 
          nameEnglish='Beef Stew Noodle Soup' 
          nameViet='PHO BO KHO' 
          nameKorean='포 보 코' 
          key='P31' 
          />
          <MenuItem 
          nameEnglish='Vegetarian Pho' 
          nameViet='PHO CHAY' 
          nameKorean='포 차 이' 
          key='P32' 
          />
      </div> 
    </div>
  );
}
export default Pho;