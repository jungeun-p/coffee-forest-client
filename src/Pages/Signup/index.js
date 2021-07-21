import React from 'react';
import Signup from '../../System/User/Signup';
import styled from 'styled-components';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';

const SignupContainer = () => {
  return (
    <ContainerRoot>
      <ContentsWrapper>
        <SignupWrap>
          <SignupBox>
            <Signup />
          </SignupBox>
        </SignupWrap>
      </ContentsWrapper>
    </ContainerRoot>
  );
};

const SignupWrap = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SignupBox = styled.div`
  @media all and (min-width: 768px) {
    width: 315px;
    background: #ffffff;
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 40px 30px 0 30px;
    margin: 0;
  }
`;

export default SignupContainer;
