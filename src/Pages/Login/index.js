import React from 'react';
import Login from '../../System/User/Login';
import styled from 'styled-components';
import { InputTitleB } from '../../Components/Input';

const LoginContainer = () => {
  return (
    <>
      <InputTitleB title="CoffeeForest" />
      <TitleWrap>
        <InputTitleB title="로그인" />
        <InputTitleB title="🧩" />
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

export default LoginContainer;
