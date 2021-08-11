import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { LOCAL_HOST } from '../../../Lib/constant';
import { actions } from '../../../Store/schedule';
import { useDispatch, useSelector } from 'react-redux';
import WorkPlan from '../../../Pages/Mypage/Weekly/Plan/WorkPlan';

const SaveWorkPlan = ({ weekend }) => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);

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
  console.log(event);
  // 일정 추가 api
  const sendSchedule = () => {
    let schedule = {
      companyIndex: companyIndex,
      userIndex: userIndex,
      title: '김석진 연차',
      date: event.date,
      startTime: event.startTime,
      endTime: event.endTime,
      scheduleType: event.scheduleType
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
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(actions.scheduleEnter(index));
  };

  // 퇴근 api
  const onLeaving = () => {
    const index = {
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(actions.scheduleEnd(index));
  };

  return (
    <WorkPlan
      weekend={weekend}
      onAttandacne={onAttandacne}
      onLeaving={onLeaving}
      sendSchedule={sendSchedule}
      onChange={onChange}
      event={event}
    />
  );
};

export default SaveWorkPlan;
