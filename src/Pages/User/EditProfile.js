import React from 'react';
import styled from 'styled-components';
import { InputCommon, InputTitleS } from '../../Components/Input';
import basicProfile from '../../assets/Img/profile/basicProfile.png';

const EditProfile = ({ profile }) => {
  return (
    <ProfileForm>
      {profile.map((pro, index) => (
        <MainProfile key={index}>
          <ProfileImage src={basicProfile} />
          <div className="name">{pro.name}</div>
          <div className="infos">
            <div className="info">{pro.email}</div>
            <div className="info">{pro.position}</div>
          </div>
        </MainProfile>
      ))}
      <InputTitleS title="회사" />
      <ProfileInformation>
        {profile.map((pro, index) => (
          <InputCommon key={index} name="companyName" value={pro.companyName} />
        ))}
      </ProfileInformation>
      <InputTitleS title="개인 정보" />
      {profile.map((pro, index) => (
        <ProfileInformation key={index}>
          <InputCommon name="name" value={pro.name} />
          <InputCommon name="password" value={pro.password} />
          <InputCommon name="phone" value={pro.phone} />
          <InputCommon
            name="address"
            onChange={pro.onChange}
            value={pro.address}
          />
        </ProfileInformation>
      ))}
    </ProfileForm>
  );
};

const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  /* width: 100%; */
`;
const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  .name {
    color: #1ca953;
    font-weight: 600;
    font-size: 16px;
    margin: 20px 0 10px 0;
  }
  .infos {
    text-align: center;
    .info {
      color: #232323;
      font-size: 12px;
      margin-bottom: 3px;
    }
  }
`;
const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
`;

export default EditProfile;
