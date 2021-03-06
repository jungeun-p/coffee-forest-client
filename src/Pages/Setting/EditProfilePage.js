import React from 'react';
import styled from 'styled-components';
import { ButtonCommon, ButtonCommonH } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';

const EditProfilePage = ({ profile, onChange, SaveProfile }) => {
  return (
    <ProfileForm>
      <TitleB>회원정보 수정</TitleB>
      <ProfileInformation>
        <InputTitleS title="개인정보" />
        <InputCommon
          onChange={onChange}
          name="name"
          value={profile.name}
          placeholder="이름"
        />
        <PasswordUpdate>
          <InputCommon
            onChange={onChange}
            name="password"
            value={profile.password}
            placeholder="비밀번호"
            type="password"
          />
          <ButtonCommonH title="수정" />
        </PasswordUpdate>
        <InputCommon
          onChange={onChange}
          name="phone"
          value={profile.phone}
          placeholder="전화번호"
        />
        <InputCommon
          onChange={onChange}
          name="address"
          value={profile.address}
          placeholder="주소"
        />
      </ProfileInformation>
      <ButtonCommon onClick={SaveProfile} title="저장하기" />
    </ProfileForm>
  );
};

const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;

const ProfileInformation = styled.div`
  margin-bottom: 40px;
`;

const PasswordUpdate = styled.div`
  display: flex;
  flex-direction: row;
`;

export default EditProfilePage;
