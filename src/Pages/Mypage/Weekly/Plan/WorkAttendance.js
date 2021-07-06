import React from 'react';
import WeekendList from '../../../../Components/Calendar';

const WorkAttendance = ({
  schedulePlan,
  enter,
  sendSchedule,
  onChange,
  event
}) => {
  console.log(schedulePlan);
  const hour = enter?.startTime.slice(0, 2);
  const minute = enter?.startTime.slice(3, 5);
  const hourEnd = enter?.endTime.slice(0, 2);
  const minuteEnd = enter?.endTime.slice(3, 5);

  const date = Object.keys(schedulePlan)[0];
  // const startTime = Object.values(schedulePlan)[0][0].startTime;
  // const endTime = Object.values(schedulePlan)[0][0].endTime;

  return (
    <>
      <WeekendList
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
        date={date}
        title="근무"
        startTime={
          (hour > 12 ? `오후 ${hour - 12}:${minute}` : `오전 ${hour}`) || '8:30'
        }
        endTime={
          (hourEnd > 12
            ? `오후 ${hourEnd - 12}:${minuteEnd}`
            : `오전 ${hourEnd}`) || '17:30'
        }
      />
      <WeekendList
        sendSchedule={sendSchedule}
        onChange={onChange}
        event={event}
        date={date}
        title="근무"
        startTime={
          (hour > 12 ? `오후 ${hour - 12}:${minute}` : `오전 ${hour}`) || '8:30'
        }
        endTime={
          (hourEnd > 12
            ? `오후 ${hourEnd - 12}:${minuteEnd}`
            : `오전 ${hourEnd}`) || '17:30'
        }
      />
      {/* <WeekendList
        date="7월 7일"
        title="근무"
        startTime={startTime ? startTime : '8:30'}
        endTime={endTime ? endTime : '16:40'}
      /> */}
    </>
  );
};

export default WorkAttendance;
