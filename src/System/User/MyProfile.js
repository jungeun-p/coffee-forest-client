import React from 'react';
import EditProfile from '../../Pages/User/EditProfile';

const MyProfile = () => {
  const profile = [
    {
      name: '김바름',
      email: 'barum@naver.com',
      position: 'EMPLOYEE',
      officeName: '커피포레스트',
      phone: '010-0000-0000',
      주소: '경기도 수원시 '
    }
  ];
  return <EditProfile profile={profile} />;
};

export default MyProfile;
