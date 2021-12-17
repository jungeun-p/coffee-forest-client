import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';
import numberFormatter from '../../Hooks/numberFormat';

const SignTemplate = ({
  user,
  onChange,
  numberChange,
  onClick,
  ValidateEmail,
  validEmail,
  check
}) => {
  const { password, email } = check.check;

  const formSignInfo = [
    {
      index: 1,
      name: 'email',
      onChange: onChange,
      value: user.email,
      placeholder: '이메일',
      onBlur: ValidateEmail,
      validEmail: validEmail,
      checkEmail: email
    },
    {
      index: 2,
      name: 'password',
      onChange: onChange,
      value: user.password,
      placeholder: '비밀번호',
      onBlur: check.CheckPassword,
      checkPw: password
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
      onChange: numberChange,
      value: user.phone,
      placeholder: '전화번호',
      placeholderTitle: '000-0000-0000'
    },
    {
      index: 5,
      name: 'address',
      onChange: onChange,
      value: user.address,
      placeholder: '주소'
    }
  ];

  return (
    <SignForm>
      <TitleB>회원 가입</TitleB>
      <InputTitleS title={'개인 정보'} />
      <SignInformation>
        {formSignInfo.map((cate, index) => (
          <InputCommon
            key={index}
            name={cate.name}
            value={cate.value}
            placeholder={cate.placeholder}
            placeholderTitle={cate.placeholderTitle}
            onChange={cate.onChange}
            onBlur={cate?.onBlur}
            validEmail={cate?.validEmail}
            checkEmail={cate?.checkEmail}
            checkPw={cate?.checkPw}
          />
        ))}
      </SignInformation>
      <ButtonCommon onClick={onClick} title="회원가입" />
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

export default SignTemplate;
