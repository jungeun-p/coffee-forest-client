import dayjs from 'dayjs';
import { useState } from 'react';

const addThisMonth = () => {
  // day
  const weekday = require('dayjs/plugin/weekday');
  const isoWeek = require('dayjs/plugin/isoWeek');
  const weekOfYear = require('dayjs/plugin/weekOfYear');

  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const createCalendar = () => {
    const startWeek = viewDate.startOf('month').week();
    const endWeek =
      viewDate.endOf('month').week() === 1
        ? 53
        : viewDate.endOf('month').week();
    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push();
    }

    return calendar;
  };

  // // 이번 주 시작 날짜 (일요일 : 0, 월요일 : 1)
  // const thisYear = today.year();
  // const thisMonth = today.month() + 1;

  return <div></div>;
};

export default addThisMonth;
