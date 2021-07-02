import React from 'react';
import Login from '../../System/User/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputTitle } from '../../Components/Input';

const LoginContainer = () => {
  return (
    <Wrap>
      <InputTitle title="CoffeeForest" />
      <TitleWrap>
        <InputTitle title="로그인" />
        <InputTitle title="로고" />
      </TitleWrap>
      <Login />
      <Link to="/signup">근태관리가 처음이세요?</Link>
      <Link to="/">비밀번호를 잊으셨나요?</Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: #f8faed;
  padding: 0 28px 0 28px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default LoginContainer;
