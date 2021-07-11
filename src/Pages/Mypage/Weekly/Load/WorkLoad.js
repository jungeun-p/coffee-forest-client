import React from 'react';
import styled from 'styled-components';

const WorkLoad = ({ schedulePlan, weekend }) => {
  const date = Object.keys(schedulePlan);
  const list = schedulePlan[date];
  return (
    <WorkLoadBox>
      <UserProfile>
        <div className="logo">💻</div>
        <div className="name">
          <div className="userName">{weekend.name} 님의</div>
          <div className="userTitle">이번 주 업무량</div>
        </div>
      </UserProfile>
      <UserLoad>
        <UserStatus className="status">⛱️ 휴가</UserStatus>
        <UserStatus className="status">💼 외근</UserStatus>
        <UserStatus className="status">✍ 회의</UserStatus>
        {date.map(day =>
          schedulePlan[day].map(key => (
            // <UserStatus status={key.scheduleStatus ? true : false}></UserStatus>
            <UserStatus
              status={key.scheduleStatus === 'OUTSIDE' ? true : false}
            >
              💼 외근
            </UserStatus>
          ))
        )}
      </UserLoad>
    </WorkLoadBox>
  );
};

const WorkLoadBox = styled.div`
  height: 165px;
  background-color: white;
  background: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
  .logo {
    font-size: 21px;
    line-height: 35px;
  }
  .name {
    margin-left: 10px;
    .userName {
      font-size: 10px;
      line-height: 10px;
      font-weight: 500;
    }
    .userTitle {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

const UserLoad = styled.div`
  /* color: #444444; */
  /* .status {
    font-size: 15px;
    font-weight: 600;
    color: ${props => (props.status ? '#c4c4c4' : '#444444')};
  } */
`;

const UserStatus = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${props => (props.status ? '#444444' : '#c4c4c4')};
`;

export default WorkLoad;
