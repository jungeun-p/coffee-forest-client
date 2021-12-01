import React, { useCallback, useState } from 'react';
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

  // 출근 api
  const onAttandacne = useCallback(() => {
    const index = {
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(actions.scheduleEnter(index));
  }, [dispatch]);

  // 퇴근 api
  const onLeaving = useCallback(() => {
    const index = {
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(actions.scheduleEnd(index));
  }, [dispatch]);

  return (
    <WorkPlan
      weekend={weekend}
      onAttandacne={onAttandacne}
      onLeaving={onLeaving}
      onChange={onChange}
      event={event}
    />
  );
};

export default SaveWorkPlan;
