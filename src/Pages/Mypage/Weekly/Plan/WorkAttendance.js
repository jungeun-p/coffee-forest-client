import React from 'react';
import WeekendList from '../../../../Components/Calendar';

const WorkAttendance = ({
  schedulePlan,
  enter,
  sendSchedule,
  onChange,
  event
}) => {
  // 실시간 출퇴근 시간
  // const hour = enter?.startTime.slice(0, 2);
  // const minute = enter?.startTime.slice(3, 5);
  // const hourEnd = enter?.endTime.slice(0, 2;
  // const minuteEnd = enter?.endTime.slice(3, 5);
  // const startTime = Object.values(schedulePlan)[0][0].startTime;
  // const endTime = Object.values(schedulePlan)[0][0].endTime;

  // 기존 scheduleList
  // key값
  const date = Object.keys(schedulePlan);
  // values값, key값
  // date.map(day => console.log(schedulePlan[day], day));

  return (
    <>
      {date?.map((day, index) => (
        <div key={index}>
          <WeekendList
            key={index}
            sendSchedule={sendSchedule}
            onChange={onChange}
            event={event}
            date={day}
            plan={schedulePlan[day]}
          />
        </div>
      ))}
    </>
  );
};

export default WorkAttendance;
