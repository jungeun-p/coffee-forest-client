import React from 'react';

const WorkAddSchedule = ({ sendSchedule, onChange, event }) => {
  return (
    <>
      <p>일정</p>
      <div>
        <input
          name="date"
          value={event.date}
          placeholder="날짜"
          onChange={onChange}
        />
        <input
          name="startTime"
          value={event.startTime}
          placeholder="시작 시간"
          onChange={onChange}
        />
        <input
          name="endTime"
          value={event.endTime}
          placeholder="마감 시간"
          onChange={onChange}
        />
        <input
          name="scheduleStatus"
          value={event.scheduleStatus}
          placeholder="외근"
          onChange={onChange}
        />
      </div>
      <button onClick={sendSchedule}>일정 등록</button>
    </>
  );
};

export default WorkAddSchedule;
