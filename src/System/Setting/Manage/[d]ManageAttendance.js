import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LOCAL_HOST } from '../../../Lib/constant';

// 삭제 예정
const ManageAttendance = () => {
  const companyIndex = useSelector(state => state.schedule.date.companyIndex);
  const [time, setTime] = useState({
    companyIndex: '',
    baseStartTime: '',
    baseEndTime: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setTime(state => ({ ...state, [name]: value }));
  };

  const onAttendanceTime = () => {
    let fixedTime = {
      companyIndex: companyIndex,
      baseStartTime: time.baseStartTime,
      baseEndTime: time.baseEndTime
    };
    axios
      .patch(`${LOCAL_HOST}company`, fixedTime)
      .then(response => {
        alert('설정이 완료 되었습니다');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <h4>근태 설정</h4>
      <div>
        <input
          onChange={onChange}
          name="baseStartTime"
          value={time.baseStartTime}
          placeholder="출근 시간"
        />
        <input
          onChange={onChange}
          name="baseEndTime"
          value={time.baseEndTime}
          placeholder="퇴근 시간"
        />
      </div>
      <button onClick={onAttendanceTime}>설정 하기</button>
    </>
  );
};

export default ManageAttendance;
