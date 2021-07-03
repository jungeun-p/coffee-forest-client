import React from 'react';
import Signup from '../../System/User/Signup';
import styled from 'styled-components';
import { ContainerRoot } from '../../Components/Common';

const SignupContainer = () => {
  return (
    <ContainerRoot>
      <Wrap>
        <Signup />
      </Wrap>
    </ContainerRoot>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8faed;
  padding: 0 28px 0 28px;
`;

export default SignupContainer;
