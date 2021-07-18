import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ButtonCommon, ButtonCommonH } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';

const EditProfile = () => {
  const userData = useSelector(state => state.schedule.date);
  return (
    <ProfileForm>
      <ProfileInformation>
        <TitleB>회원정보 수정</TitleB>
        <InputTitleS title="회사" />
        <InputCommon
          name="companyName"
          value={userData.companyName}
          placeholder="회사명"
        />
      </ProfileInformation>
      <ProfileInformation>
        <InputTitleS title="개인정보" />
        <InputCommon name="name" value={userData.name} placeholder="이름" />
        <div className="password">
          <InputCommon
            name="password"
            value={userData.password}
            placeholder="비밀번호"
            type="password"
          />
          <ButtonCommonH title="수정" />
        </div>
        <InputCommon
          name="phone"
          value={userData.phone}
          placeholder="전화번호"
        />
        <InputCommon
          name="address"
          value={userData.address}
          placeholder="주소"
        />
      </ProfileInformation>
      <ButtonCommon title="저장하기" />
    </ProfileForm>
  );
};

const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileInformation = styled.div`
  margin-bottom: 40px;
  .password {
    display: flex;
    flex-direction: row;
  }
`;

export default EditProfile;
