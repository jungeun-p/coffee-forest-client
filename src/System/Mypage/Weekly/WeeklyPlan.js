import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../../Store/schedule';
import styled from 'styled-components';
import WorkData from '../../../Pages/Mypage/Weekly/Data/WorkData';
import WorkLoad from '../../../Pages/Mypage/Weekly/Load/WorkLoad';
import waitingLogo from '../../../assets/Img/logo/waitingLogo.png';
import AddThisWeek from '../../../Hooks/addThisWeek';
import WorkPlan from '../../../Pages/Mypage/Weekly/Plan/WorkPlan';

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const thisWeekDate = AddThisWeek();
  const { date, scheduleStatus } = useSelector(state => state.schedule);
  const { status } = useSelector(state => state.auth);
  const companyIndex = localStorage.getItem('companyIndex');
  const userIndex = localStorage.getItem('userIndex');

  // 일정 추가
  const [event, setEvent] = useState({
    companyIndex: '',
    userIndex: '',
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    scheduleType: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setEvent(state => ({ ...state, [name]: value }));
  };

  // 출근 api
  const onAttandacne = () => {
    const index = {
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(scheduleActions.scheduleEnter(index));
  };

  // 퇴근 api
  const onLeaving = () => {
    const index = {
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(scheduleActions.scheduleEnd(index));
  };

  useEffect(() => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: thisWeekDate[0].date
    };
    dispatch(scheduleActions.scheduleWeeklyRequest(index));
  }, [
    status,
    date.scheduleInfo.endTime,
    date.scheduleInfo.startTime,
    scheduleStatus
  ]);

  return (
    <div>
      {date && (
        <WorkWeekly>
          <WorkData weekend={date} />
          <WorkList>
            <WorkLoad weekend={date} />
            <WorkPlan
              weekend={date}
              onAttandacne={onAttandacne}
              onLeaving={onLeaving}
              onChange={onChange}
              event={event}
            />
          </WorkList>
        </WorkWeekly>
      )}
      {companyIndex === '0' && userIndex !== '0' && (
        <Preview>
          <div className="loading">
            <LoadingImg src={waitingLogo} />
            수락 대기중...
          </div>
        </Preview>
      )}
    </div>
  );
};

const Preview = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background: #00000026;
  .loading {
    font-size: 18px;
    color: white;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(40vh);
  }
`;

const LoadingImg = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

const WorkWeekly = styled.div`
  @media all and (min-width: 768px) {
    /* max-width: 80vw; */
  }
  /* @media (min-width: 0px) {
    min-width: 80vw;
  } */
`;

const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export default WeeklyPlan;
