import React from 'react';
import styled from 'styled-components';
import ButtonCommon from '../../Components/Button';
import { InputCommon, InputTitle } from '../../Components/Input';

const SignEmployee = ({ user, onChange, onClick, ValidateEmail }) => {
  return (
    <SignForm>
      <InputTitle title={'회사'} />
      <SignInformation>
        {/* 회사 리스트 API */}
        <input
          placeholder="회사 이름을 작성해주세요"
          name="companyName"
          value={user.companyName}
          onChange={onChange}
        />
      </SignInformation>
      <InputTitle title={'개인 정보'} />
      <SignInformation>
        <input
          name="email"
          placeholder="email"
          value={user.email}
          onChange={onChange}
          // 이메일 중복
          onBlur={ValidateEmail}
        />
        <input
          name="password"
          placeholder="password"
          value={user.pw}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          value={user.name}
          onChange={onChange}
        />
        <input
          name="phone"
          placeholder="phone"
          value={user.phone}
          onChange={onChange}
        />
        <input
          name="position"
          placeholder="position"
          value={user.position}
          onChange={onChange}
        />
        <input
          name="address"
          placeholder="address"
          value={user.address}
          onChange={onChange}
        />
      </SignInformation>
      <ButtonCommon onClick={onClick} title={'회원가입'} />
    </SignForm>
  );
};

const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SignEmployee;
