import React from 'react';
import styled from 'styled-components';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';
import Enroll from '../../System/User/Enroll';

const EnrollContainer = () => {
  return (
    <ContainerRoot>
      <ContentsWrapper>
        <EnrollWrap>
          <EnrollBox>
            <Enroll />
          </EnrollBox>
        </EnrollWrap>
      </ContentsWrapper>
    </ContainerRoot>
  );
};

const EnrollWrap = styled.div``;
const EnrollBox = styled.div``;

export default EnrollContainer;
