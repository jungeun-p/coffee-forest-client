import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../../../assets/Img/profile/basicProfile.png';
import { useSelector } from 'react-redux';

const WorkMypage = ({ weekend }) => {
  const { position } = useSelector(state => state.user.userData);

  return (
    <MainProfile>
      <div className="Info">
        <div className="Name">{weekend?.userName}</div>
        <div className="Position">
          {position === 'ADMIN' ? '관리자' : '직원'}
        </div>
      </div>
      <Logo src={`${weekend.profileImage}#2324` || mainLogo} />
    </MainProfile>
  );
};

const MainProfile = styled.div`
  display: flex;
  flex-direction: row;
  .Info {
    /* visibility: hidden; */
    margin-right: 10px;
    text-align: right;
    font-size: 12px;
    font-weight: 700;
    /* @media all and (min-width: 768px) {
      visibility: visible;
    } */
    .Name {
      font-size: 14px;
    }
    .Position {
      font-size: 9px;
      color: #c4c4c4;
      margin-top: 3px;
    }
  }
`;

const Logo = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  object-fit: cover;
`;

export default WorkMypage;
