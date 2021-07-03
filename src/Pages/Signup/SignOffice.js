import React from 'react';
import styled from 'styled-components';
import ButtonCommon from '../../Components/Button';
import { InputCommon, InputTitleS } from '../../Components/Input';

const SignOffice = ({
  user,
  onChange,
  onClick,
  ValidateEmail,
  ValidateBusinessNumber
}) => {
  const formSignOffice = [
    {
      index: 1,
      name: 'companyName',
      onChange: onChange,
      value: user.companyName,
      placeholder: '회사명'
    },
    {
      index: 2,
      name: 'companyAddress',
      onChange: onChange,
      value: user.companyAddress,
      placeholder: '회사 주소'
    },
    {
      index: 3,
      name: 'businessNumber',
      onChange: onChange,
      value: user.businessNumber,
      placeholder: '사업자 번호',
      onBlur: ValidateBusinessNumber
    }
  ];
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
        {formSignOffice.map((cate, index) => (
          <InputCommon
            key={index}
            name={cate.name}
            value={cate.value}
            placeholder={cate.placeholder}
            onChange={cate.onChange}
            onBlur={cate?.onBlur}
          />
        ))}
      </SignInformation>
      <InputTitleS title={'개인 정보'} />
      <SignInformation>
        {formSignInfo.map((cate, index) => (
          <InputCommon
            key={index}
            name={cate.name}
            value={cate.value}
            placeholder={cate.placeholder}
            onChange={cate.onChange}
            onBlur={cate?.onBlur}
          />
        ))}
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
  margin-bottom: 40px;
`;

export default SignOffice;
