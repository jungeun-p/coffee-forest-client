import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import { useState } from 'react';

const AddThisWeek = () => {
  // plugin
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);

  let calendar = [];
  const [
    viewDate //setViewDate
  ] = useState(dayjs());

  const ThisWeek = n => {
    const date = viewDate.weekday(n).format('YYYY-MM-DD');
    return {
      date
    };
  };
  for (let i = 1; i < 6; i++) {
    calendar.push(ThisWeek(i));
  }
  return calendar;
};

// // 추후 기능 구현
// const changeWeekend = () => {};
export default AddThisWeek;
