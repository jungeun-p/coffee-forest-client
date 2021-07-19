import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';

const SignEmployee = ({
  user,
  onChange,
  onClick,
  ValidateEmail,
  validEmail,
  check
}) => {
  const { password, email } = check.check;
  console.log(password);

  const formSignInfo = [
    {
      index: 1,
      name: 'email',
      onChange: onChange,
      value: user.email,
      placeholder: '이메일',
      onBlur: ValidateEmail,
      validEmail: validEmail
      // onBlur: ValidateForm
    },
    {
      index: 2,
      name: 'password',
      onChange: onChange,
      value: user.password,
      placeholder: '비밀번호',
      onBlur: check.CheckPassword,
      check: password
      // onBlur: ValidateForm
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
            placeholder={cate.placeholder}
            onChange={cate.onChange}
            onBlur={cate?.onBlur}
            validEmail={cate?.validEmail}
            check={cate?.check}
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

export default SignEmployee;
