import React from 'react';
import styled from 'styled-components';
import addCalendar from '../../Hooks/addThisMonth';

const ThisMonthCalendar = () => {
  const thisMonthDate = addCalendar();
  const onClick = () => {
    console.log('back');
  };
  return (
    <MonthlyCalendarBox>
      <MonthlyTitle>
        <div className="month">{thisMonthDate.thisMonth}월</div>
        <div className="button">
          <ButtonBack onClick={onClick}>{`<`}</ButtonBack>
          <ButtonFront>{`>`}</ButtonFront>
        </div>
      </MonthlyTitle>
      <div className="calendar">
        <MonthlyWeek />
        {/* <MonthlyDate thisMonthDate={thisMonthDate} /> */}
      </div>
    </MonthlyCalendarBox>
  );
};

const MonthlyCalendarBox = styled.div`
  @media all and (min-width: 768px) {
    margin-right: 70px;
    width: 320px;
  }
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  .calendar {
    display: flex;
    flex-direction: column;
  }
`;

const MonthlyTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  .month {
    font-weight: 700;
    font-size: 18px;
    color: #1ca953;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    width: 30px;
  }
`;
const ButtonBack = styled.div``;
const ButtonFront = styled.div``;

const MonthlyWeek = () => {
  return (
    <CalendarWeek>
      <div className="oneweek">
        <div className="day">월</div>
        <div className="day">화</div>
        <div className="day">수</div>
        <div className="day">목</div>
        <div className="day">금</div>
        <div className="day">토</div>
        <div className="day">일</div>
      </div>
    </CalendarWeek>
  );
};

const CalendarWeek = styled.div`
  margin-bottom: 10px;
  .oneweek {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    font-weight: 700;
    font-size: 12px;
  }
`;

// const MonthlyDate = ({ thisMonthDate }) => {
//   return (
//     <CalendarDate>
//       <div className="onemonth">
//         {thisMonthDate.calendar.map((it, index) => (
//           <div className="day" key={index}>
//             {it}
//           </div>
//         ))}
//       </div>
//     </CalendarDate>
//   );
// };

// const CalendarDate = styled.div`
//   /* width: 240px;
//   display: flex;
//   flex-direction: row; */
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
//   .onemonth {
//     font-weight: 600;
//     font-size: 20px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     align-items: baseline;
//     width: 300px;
//     .day {
//       margin: 15px 15px;
//     }
//   }
`;

export default ThisMonthCalendar;
