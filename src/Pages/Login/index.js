import React from 'react';
import Login from '../../System/User/Login';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InputTitleB } from '../../Components/Input';
import { ContentsWrapper } from '../../Components/Common';

const LoginContainer = () => {
  return (
    <ContentsWrapper>
      <InputTitleB title="CoffeeForest" />
      <TitleWrap>
        <InputTitleB title="로그인" />
        <InputTitleB title="🧩" />
      </TitleWrap>
      <Login />
      <Link to="/signup">근태관리가 처음이세요?</Link>
      <Link to="/">비밀번호를 잊으셨나요?</Link>
    </ContentsWrapper>
  );
};

// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: center; */
// `;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default LoginContainer;
