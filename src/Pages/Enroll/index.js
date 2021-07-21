import React from 'react';
import styled from 'styled-components';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';
import Enroll from '../../System/User/Enroll';

const EnrollContainer = () => {
  return (
    <ContainerRoot>
      <ContentsWrapper>
        <EnrollWrap>
          <div className="box">
            <Enroll />
          </div>
        </EnrollWrap>
      </ContentsWrapper>
    </ContainerRoot>
  );
};

const EnrollWrap = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .box {
    @media all and (min-width: 768px) {
      width: 315px;
      background: #ffffff;
      box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
      border-radius: 16px;
      padding: 40px 30px 0 30px;
      margin: 0;
    }
  }
`;

export default EnrollContainer;
