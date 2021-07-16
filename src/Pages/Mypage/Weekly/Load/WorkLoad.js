import React from 'react';
import styled from 'styled-components';

const WorkLoad = ({ schedulePlan, weekend }) => {
  const date = Object.keys(schedulePlan);
  const status = date.map(date =>
    schedulePlan[date].map(key => key.scheduleStatus)
  );
  // array of arrays 펼치기
  const statusArray = status.reduce((acc, it) => [...acc, ...it], []);
  // 중복 제거
  const uniqueStatus = [...new Set(statusArray)];
  console.log(uniqueStatus);
  const statusCateogry = [
    {
      index: 1,
      name: '⛱️ 휴가',
      status: 'VACATION'
    },
    {
      index: 2,
      name: '💼 외근',
      status: 'OUTSIDE'
    },
    {
      index: 3,
      name: '✍ 회의',
      status: 'MEETING'
    }
  ];
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
        {uniqueStatus.map(key =>
          statusCateogry.map((name, index) => (
            <UserStatus key={index} status={name.status === key ? true : false}>
              {name.name}
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

  @media all and (min-width: 768px) {
    /* min-width: 250px; */
    margin-right: 3vw;
  }
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
      font-size: 12px;
      line-height: 12px;
      font-weight: 500;
    }
    .userTitle {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

const UserLoad = styled.div`
  /* margin-left: 5em; */
`;

const UserStatus = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${props => (props.status ? '#444444' : '#c4c4c4')};
`;

export default WorkLoad;
