import React from 'react';
import Login from '../../System/User/Login';
import styled from 'styled-components';
import { InputTitleB } from '../../Components/Input';
import mainLogo from '../../assets/Img/logo/mainLogo.png';

const LoginContainer = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        {/* <InputTitleB title="CoffeeForest" /> */}
        <TitleWrap>
          <InputTitleB title="로그인" />
          <Logo src={mainLogo} />
        </TitleWrap>
        <Login />
      </LoginBox>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LoginBox = styled.div`
  @media all and (min-width: 768px) {
    width: 315px;
    background: #ffffff;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 40px 30px 0 30px;
    margin: 0;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 34px;
`;

export default LoginContainer;
