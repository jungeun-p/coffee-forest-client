import React from 'react';
import styled from 'styled-components';
import ButtonCommon from '../../Components/Button';
import { InputTitle } from '../../Components/Input';

const SignOffice = ({
  user,
  onChange,
  onClick,
  ValidateEmail,
  ValidateBusinessNumber
}) => {
  const form = [];
  form.concat({
    user,
    onChange,
    onClick,
    ValidateEmail,
    ValidateBusinessNumber
  });
  return (
    <SignForm>
      <InputTitle title={'회사'} />
      <SignInformation>
        <input
          placeholder="회사명"
          onChange={onChange}
          name={'companyName'}
          value={user.companyName}
        />
        <input
          placeholder="회사 주소"
          onChange={onChange}
          name={'companyAddress'}
          value={user.companyAddress}
        />
        <input
          placeholder="사업자 번호"
          onChange={onChange}
          name={'businessNumber'}
          value={user.businessNumber}
          onBlur={ValidateBusinessNumber}
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
      <ButtonCommon onClick={onClick} title={'등록하기'} />
    </SignForm>
  );
};

const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const SignInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default SignOffice;
