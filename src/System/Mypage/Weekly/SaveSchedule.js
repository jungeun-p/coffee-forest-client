import React, { useState } from 'react';
import axios from 'axios';
import { LOCAL_HOST } from '../../../Lib/constant';
import WorkAttendance from '../../../Pages/Mypage/Weekly/Plan/WorkAttendance';
import { actions } from '../../../Store/schedule';
import { useDispatch, useSelector } from 'react-redux';
import WorkAddSchedule from '../../../Pages/Mypage/Weekly/Plan/WorkAddSchedule';
import WorkPlan from '../../../Pages/Mypage/Weekly/Plan/WorkPlan';

const SaveSchedule = ({ schedulePlan, weekend }) => {
  const dispatch = useDispatch();
  const { enter, companyIndex, userIndex } = useSelector(
    state => state.schedule.date
  );

  // 일정 추가
  const [event, setEvent] = useState({
    companyIndex: companyIndex,
    userIndex: userIndex,
    date: '',
    startTime: '',
    endTime: '',
    scheduleStatus: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setEvent(state => ({ ...state, [name]: value }));
  };

  // 일정 추가 api
  const sendSchedule = () => {
    let schedule = {
      companyIndex: event.companyIndex,
      userIndex: event.userIndex,
      date: event.date,
      startTime: event.startTime,
      endTime: event.endTime,
      scheduleStatus: event.scheduleStatus
    };
    axios
      .post(`${LOCAL_HOST}schedule`, schedule)
      .then(response => {
        alert('일정이 요청 되었습니다.');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  // 출근 api
  const onAttandacne = () => {
    const index = {
      companyIndex: weekend.companyIndex,
      userIndex: weekend.userIndex
    };
    dispatch(actions.scheduleEnter(index));
  };

  // 퇴근 api
  const onLeaving = () => {
    const index = {
      companyIndex: weekend.companyIndex,
      userIndex: weekend.userIndex
    };
    dispatch(actions.scheduleEnd(index));
  };

  return (
    <>
      <WorkPlan
        onAttandacne={onAttandacne}
        onLeaving={onLeaving}
        schedulePlan={schedulePlan}
        enter={enter}
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
      />
      {/* <button onClick={onAttandacne}>출근</button>
      <button onClick={onLeaving}>퇴근</button>
      <WorkAttendance schedulePlan={schedulePlan} enter={enter} />
      <WorkAddSchedule
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
      /> */}
    </>
  );
};

export default SaveSchedule;