import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { InputCommon, InputTitleS } from '../../Components/Input';

const SignEmployee = ({ user, onChange, onClick, ValidateEmail }) => {
  const formSignInfo = [
    {
      index: 1,
      name: 'email',
      onChange: onChange,
      value: user.email,
      placeholder: '이메일',
      onBlur: ValidateEmail
    },
    {
      index: 2,
      name: 'password',
      onChange: onChange,
      value: user.password,
      placeholder: '비밀번호'
    },
    {
      index: 3,
      name: 'name',
      onChange: onChange,
      value: user.name,
      placeholder: '이름'
    },
    {
      index: 4,
      name: 'phone',
      onChange: onChange,
      value: user.phone,
      placeholder: '전화번호'
    },
    {
      index: 5,
      name: 'position',
      onChange: onChange,
      value: user.position,
      placeholder: '직급'
    },
    {
      index: 6,
      name: 'address',
      onChange: onChange,
      value: user.address,
      placeholder: '주소'
    }
  ];
  return (
    <SignForm>
      <InputTitleS title={'회사'} />
      <SignInformation>
        {/* 회사 리스트 API */}
        <InputCommon
          placeholder="회사명"
          name="companyName"
          value={user.companyName}
          onChange={onChange}
        />
      </SignInformation>
      <InputTitleS title={'개인 정보'} />
      <SignInformation>
        {formSignInfo.map((cate, index) => (
          <InputCommon
            key={index}
            name={cate.name}
            placeholder={cate.placeholder}
            onChange={cate.onChange}
            onBlur={cate?.onBlur}
          />
        ))}
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
  margin-bottom: 40px;
  /* width: 100%; */
`;

export default SignEmployee;
