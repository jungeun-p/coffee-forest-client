import React from 'react';
import WeekendList from '../../../../Components/Calendar';

const WorkAttendance = ({
  sendSchedule,
  onChange,
  event,
  schedulePlan,
  enter
}) => {
  // const value = schedulePlan[Object.values(schedulePlan)[0]];
  // const startTime = Object.values(schedulePlan)[0][0].startTime;
  // const endTime = Object.values(schedulePlan)[0][0].endTime;
  return (
    <>
      <WeekendList
        date="7월 7일"
        title="근무"
        startTime={enter?.startTime || '8:30'}
        endTime={enter?.endTime || '16:40'}
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
      />
      <WeekendList
        date="7월 7일"
        title="근무"
        startTime={enter?.startTime || '8:30'}
        endTime={enter?.endTime || '16:40'}
      />
    </>
  );
};

export default WorkAttendance;
