import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../../../assets/Img/profile/basicProfile.png';

const WorkMypage = ({ weekend }) => {
  return (
    <MainProfile>
      <div className="Info">
        <div className="Name">{weekend.name}</div>
        <div className="Position">{weekend.position}</div>
      </div>
      <Logo src={mainLogo} />
    </MainProfile>
  );
};

const MainProfile = styled.div`
  display: flex;
  flex-direction: row;
  .Info {
    visibility: hidden;
    margin-right: 10px;
    text-align: right;
    font-size: 12px;
    @media all and (min-width: 768px) {
      visibility: visible;
    }
    .Name {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const Logo = styled.img`
  height: 34px;
`;

export default WorkMypage;
