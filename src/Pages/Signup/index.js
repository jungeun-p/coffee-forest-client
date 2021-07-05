import React from 'react';
import Signup from '../../System/User/Signup';
import styled from 'styled-components';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';

const SignupContainer = () => {
  return (
    <ContainerRoot>
      <ContentsWrapper>
        <Wrap>
          <Signup />
        </Wrap>
      </ContentsWrapper>
    </ContainerRoot>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f8faed; */
`;

export default SignupContainer;
