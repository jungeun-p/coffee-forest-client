import React, { useState } from 'react';
import styled from 'styled-components';
import basicProfile from '../../assets/Img/profile/basicProfile.png';
import ToggleDown from '../../assets/Icon/ToggleDown.png';
import ToggleUp from '../../assets/Icon/ToggleUp.png';
import { InputCommon } from '../Input';
import { ButtonCommonS } from '../Button';

const EmployeeListArticle = ({
  // LoadDetail,
  updateEmployee,
  name,
  profileImage,
  email,
  workStartTime,
  workEndTime,
  fullDayOffCount,
  employee,
  onChange
}) => {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(!view ? true : false);
  };
  return (
    <ListWrap
    //onClick={LoadDetail}
    >
      <InformationWrap
        onView={onView}
        view={view}
        name={name}
        profileImage={profileImage}
        email={email}
      />
      <ManageForm
        updateEmployee={updateEmployee}
        view={view}
        workStartTime={workStartTime}
        workEndTime={workEndTime}
        fullDayOffCount={fullDayOffCount}
        employee={employee}
        onChange={onChange}
      />
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

const InformationWrap = ({ onView, view, name, email, profileImage }) => {
  return (
    <InformationBox>
      <Information>
        <ProfileImg src={profileImage || basicProfile} />
        <div className="profiledetail">
          <div className="name">{name}</div>
          <div className="info">
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

// const ButtonWrap = styled.div`
//   display: ${props => (props.acceptance ? 'inline' : 'none')};
// `;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
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

const ManageForm = ({
  view,
  updateEmployee,
  workStartTime,
  workEndTime,
  fullDayOffCount,
  employee,
  onChange
}) => {
  return (
    <FormBox view={view}>
      <FlexibleForm>
        <div className="title">
          <input className="checkbox" type="checkbox" />
          <div>???????????????</div>
        </div>
        <div className="time">
          <InputCommon
            name="workStartTime"
            onChange={onChange}
            value={employee.workStartTime}
            // width="123px"
            placeholder="?????? ??????"
          />
          <InputCommon
            name="workEndTime"
            onChange={onChange}
            value={employee.workEndTime}
            // width="123px"
            placeholder="?????? ??????"
          />
        </div>
        <div className="title">
          <div>?????? ??????</div>
        </div>
        <div className="form">
          <InputCommon
            name="fullDayOffCount"
            onChange={onChange}
            value={employee.fullDayOffCount}
            placeholder="?????? ??????"
          />
        </div>
        <div className="button">
          <ButtonCommonS onClick={updateEmployee} title="??????" />
        </div>
      </FlexibleForm>
    </FormBox>
  );
};

const FormBox = styled.div`
  display: ${props => (props.view ? '' : 'none')};
`;

const FlexibleForm = styled.div`
  .title {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    font-weight: 800;
    line-height: 14px;
    color: #232323;
    .checkbox {
      width: 10px;
      height: 10px;
      border: 3px solid #1ca953;
      cursor: pointer;
    }
  }
  .time {
    /* width: 280px; */
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; */
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 15px;
  }
`;

export default EmployeeListArticle;
