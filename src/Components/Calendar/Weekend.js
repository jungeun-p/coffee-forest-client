import React from 'react';
import styled from 'styled-components';
// import { ButtonCommonS } from '../Button';

const WeekendList = ({
  date,
  title,
  startTime,
  endTime,
  sendSchedule,
  onChange,
  event
}) => {
  return (
    <WeekendArticle>
      <WeekendDate>{date}</WeekendDate>
      <PlanList>
        <PlanArticle title={title} startTime={startTime} endTime={endTime} />
        <div className="addEvent">+ 근태 추가</div>
        {/* <AddEvent
          sendSchedule={sendSchedule}
          onChange={onChange}
          event={event}
        /> */}
      </PlanList>
    </WeekendArticle>
  );
};

const WeekendArticle = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f3f3f3;
`;
const WeekendDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  color: #232323;
`;
const PlanList = styled.div`
  .addEvent {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #1ca953;
    padding-top: 15px;
  }
`;

const PlanArticle = ({ title, startTime, endTime }) => {
  return (
    <PlanOne>
      <PlanTitleBox>
        <div className="title">{title}</div>
      </PlanTitleBox>
      <PlanTime>
        {startTime}~{endTime}
      </PlanTime>
    </PlanOne>
  );
};

const PlanOne = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const PlanTitleBox = styled.div`
  width: 37px;
  height: 22px;
  background: #f8faed;
  border-radius: 5px;
  margin-right: 35px;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    color: #d9dbce;
  }
`;
const PlanTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #232323;
`;

// const AddEvent = ({ sendSchedule, onchange, event }) => {
//   return (
//     <EventBox>
//       <div className="buttonWrap">
//         <ButtonCommonS title="연차" />
//         <ButtonCommonS title="회의" />
//         <ButtonCommonS title="외근" />
//       </div>
//     </EventBox>
//   );
// };

// const EventBox = styled.div`
//   display: '';
//   height: 150px;
//   background: rgba(255, 255, 255, 0.9);
//   box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
//   border-radius: 16px;
//   .buttonWrap {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     padding-top: 20px;
//   }
// `;

export default WeekendList;
