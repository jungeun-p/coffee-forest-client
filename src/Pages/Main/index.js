import React from 'react';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';
import Login from '../../Pages/Login';

const MainContainer = () => {
  return (
    <ContainerRoot>
      <ContentsWrapper>
        <Login />
      </ContentsWrapper>
    </ContainerRoot>
  );
};

export default MainContainer;
