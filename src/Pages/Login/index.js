import React from 'react';
import Login from '../../System/User/Login';
import styled from 'styled-components';
import { InputTitleB } from '../../Components/Input';
import mainLogo from '../../assets/Img/logo/mainLogo.png';

const LoginContainer = () => {
  return (
    <>
      <InputTitleB title="CoffeeForest" />
      <TitleWrap>
        <InputTitleB title="로그인" />
        <Logo src={mainLogo} />
      </TitleWrap>
      <Login />
    </>
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

const Logo = styled.img`
  height: 34px;
`;

export default LoginContainer;
