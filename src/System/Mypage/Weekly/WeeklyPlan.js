import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import WeeklyPage from '../../../Pages/Mypage/WeeklyPage';
import { actions as scheduleActions } from '../../../Store/schedule';
import styled from 'styled-components';
import WorkData from '../../../Pages/Mypage/Weekly/Data/WorkData';
import WorkLoad from '../../../Pages/Mypage/Weekly/Load/WorkLoad';
import SaveWorkPlan from './SaveWorkPlan';
import waitingLogo from '../../../assets/Img/logo/waitingLogo.png';
import AddThisWeek from '../../../Hooks/addThisWeek';

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const thisWeekDate = AddThisWeek();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const { userData } = useSelector(state => state.user);
  const weekend = useSelector(state => state.schedule.date);
  // 주간 일정 리스트 api
  // const LoadSchedule = () => {
  //   const index = {
  //     userIndex: userIndex,
  //     companyIndex: companyIndex,
  //     startDate: thisWeekDate[0].date
  //   };
  //   if (index) {
  //     dispatch(scheduleActions.scheduleInfoRequest(index));
  //   }
  // };

  useEffect(() => {
    // // if (userIndex) {
    // LoadSchedule();
    // // } else {
    // //   // window.location.replace('/');
    // // }
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: thisWeekDate[0].date
    };
    if (index) {
      dispatch(scheduleActions.scheduleInfoRequest(index));
    }
  }, [companyIndex, dispatch, userIndex]);

  return (
    <div>
      {weekend && (
        <WorkWeekly>
          <WorkData weekend={weekend} />
          <WorkList>
            <WorkLoad weekend={weekend} />
            <SaveWorkPlan weekend={weekend} />
          </WorkList>
        </WorkWeekly>
      )}
      {(userData.workApplicantStatus === 'WAITING' ||
        userData.companyApplicantStatus === 'WAIT') && (
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
