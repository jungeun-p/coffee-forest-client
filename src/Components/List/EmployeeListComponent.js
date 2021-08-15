import React, { useState } from 'react';
import styled from 'styled-components';
import basicProfile from '../../assets/Img/profile/basicProfile.png';
import ToggleDown from '../../assets/Icon/ToggleDown.png';
import ToggleUp from '../../assets/Icon/ToggleUp.png';

const EmployeeListArticle = ({ acceptance, name, phone, email }) => {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(!view ? true : false);
  };
  return (
    <ListWrap>
      <InformationWrap
        onView={onView}
        view={view}
        name={name}
        phone={phone}
        email={email}
      />
      <ManageForm acceptance={acceptance} view={view} />
    </ListWrap>
  );
};

const ListWrap = styled.div`
  background: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

const InformationWrap = ({ onView, view, name, phone, email }) => {
  return (
    <InformationBox>
      <Information>
        <ProfileImg src={basicProfile} />
        <div className="profiledetail">
          <div className="name">{name}</div>
          <div className="info">
            <div className="detail">{phone}</div>
            <div className="detail">{email}</div>
          </div>
        </div>
      </Information>
      <Toggle onClick={onView} src={view === true ? ToggleUp : ToggleDown} />
    </InformationBox>
  );
};

const InformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ButtonWrap = styled.div`
  display: ${props => (props.acceptance ? 'inline' : 'none')};
`;

const ProfileImg = styled.img`
  width: 50px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  .profiledetail {
    margin-left: 25px;
    .name {
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 10px;
    }
    .info {
      font-weight: 400;
      font-size: 10px;
      color: #444444;
      .detail {
        margin-bottom: 3px;
      }
    }
  }
`;

const Toggle = styled.img`
  width: 10px;
  height: 5px;
  cursor: pointer;
  /* src: url(${'ToggleDown'}); */
`;

const ManageForm = ({ view, acceptance }) => {
  return <FormBox view={view}>얍</FormBox>;
};

const FormBox = styled.div`
  display: ${props => (props.view ? 'flex' : 'none')};
`;

export default EmployeeListArticle;
