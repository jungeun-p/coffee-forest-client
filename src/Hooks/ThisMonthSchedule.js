// import React from 'react';
import dayjs from 'dayjs';

const ThisMonthSchedule = () => {
  const now = dayjs();
  const weekday = require('dayjs/plugin/weekday');
  dayjs.extend(weekday);

  // 이번 주 시작 날짜 (일요일 : 0, 월요일 : 1)
  const thisYear = now.year();
  const thisMonth = now.month() + 1;
  const firstWeekday = now.weekday(1).date();
  const lastWeekday = now.weekday(7).date();

  const calendar = [];
  for (let i = firstWeekday; i <= lastWeekday - 2; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    calendar.push(`${thisYear}-${thisMonth}-${i}`);
  }
  return { calendar };
};

export default ThisMonthSchedule;
