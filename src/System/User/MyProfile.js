import React from 'react';
import EditProfile from '../../Pages/User/EditProfile';

const MyProfile = () => {
  const profile = [
    {
      name: '김바름',
      email: 'barum@naver.com',
      password: 1234,
      position: 'EMPLOYEE',
      companyName: '커피포레스트',
      phone: '010-0000-0000',
      address: '경기도 수원시 '
    }
  ];
  return <EditProfile profile={profile} />;
};

export default MyProfile;
