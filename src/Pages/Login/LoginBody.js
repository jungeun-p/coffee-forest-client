import React from 'react';
//import Login from "../../System/User/Login";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonCommon from '../../Components/Button';
import { InputCommon } from '../../Components/Input';

const LoginBody = ({ user, onChange, onClick }) => {
  const formCategories = [
    {
      index: 1,
      name: 'email',
      value: user.email,
      placeholder: '이메일',
      onChange: onChange
    },
    {
      index: 2,
      name: 'password',
      value: user.password,
      placeholder: '비밀번호',
      onChange: onChange,
      type: 'password'
    }
  ];
  return (
    <LoginForm>
      <InputWrap>
        {formCategories.map((cate, index) => (
          <InputCommon
            key={index}
            name={cate.name}
            value={cate.value}
            placeholder={cate.placeholder}
            onChange={cate.onChange}
            type={cate?.type}
          />
        ))}
      </InputWrap>
      <LinkWrap>
        <Link to="/signup">근태관리가 처음이세요?</Link>
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </LinkWrap>
      <ButtonCommon title="로그인 하기" onClick={onClick} />
    </LoginForm>
  );
};

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f8faed; */
`;

const InputWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const LinkWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export default LoginBody;
