import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import basicProfile from '../../assets/Img/profile/basicProfile.png';

const ProfilePage = () => {
  const { userData } = useSelector(state => state.user);
  return (
    <MainProfile>
      <ProfileImage src={basicProfile} />
      <div className="name">{userData.name}</div>
      <div className="infos">
        <div className="office">{userData.companyName}</div>
        <div className="info">{userData.email}</div>
        <div className="info">
          {userData.position === 'ADMIN' ? '관리자' : '직원'}
        </div>
      </div>
      <DivideLine />
    </MainProfile>
  );
};

const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  .name {
    color: #1ca953;
    font-weight: 700;
    font-size: 30px;
    margin: 20px 0 10px 0;
  }
  .infos {
    color: #232323;
    margin-top: 5px;
    .info {
      font-weight: 400;
      font-size: 12px;
    }
    .office {
      font-weight: 700;
      font-size: 14px;
    }
  }
`;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
`;

const DivideLine = styled.div`
  border: 2px solid #1ca953;
  margin-top: 35px;
`;

export default ProfilePage;
