import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../../../assets/Img/logo/mainLogo.png';

const WorkMypage = ({ weekend }) => {
  return (
    <MainProfile>
      <Logo src={mainLogo} />
      {/* <div>{weekend.name}</div>
      <div>{weekend.position}</div> */}
    </MainProfile>
  );
};

const MainProfile = styled.div``;

const Logo = styled.img`
  height: 34px;
`;

export default WorkMypage;
