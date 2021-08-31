import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import basicProfile from '../../assets/Img/profile/basicProfile.png';
import { ButtonCommon } from '../../Components/Button';

const EditProfileImg = () => {
  return (
    <ImgForm>
      <TitleB>프로필 사진 변경</TitleB>
      <EditForm>
        <ProfileImage src={basicProfile} />
      </EditForm>
      <ButtonCommon title="변경하기" />
    </ImgForm>
  );
};

const ImgForm = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;
const ProfileImage = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export default EditProfileImg;
