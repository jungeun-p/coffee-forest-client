const addThisMonth = () => {
  let calendar = [];

  // 날짜 규격 함수
  const formDate = date => {
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth() + 1;
    const thisMonthDay = date.getDate();

    const addZero = num => {
      if (num < 10) {
        num = '0' + num;
      }
      return num;
    };
    const monthArticle = `${
      addZero(thisYear) - addZero(thisMonth) - addZero(thisMonthDay)
    }`;
    return monthArticle;
  };

  const now = new Date();
  const nowDayOfWeek = now.getDay();
  const nowDate = now.getDate();
  const first = new Date(now.getFullYear(), now.getMonth(), 1);
  const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  console.log(nowDate, first, last.getDate());

  const addCalendar = () => {
    const calendar = [];
    for (let i = 1; i <= last.getDate(); i++) {
      calendar.push(i);
    }
    const thisMonth = last.getMonth() + 1;
    return { calendar, thisMonth };
  };

  return calendar;
};

// 이전 달 혹은 다음 달 출력 함수

// 달력 출력
const addCalendar = () => {
  const now = new Date();
  const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const calendar = [];

  for (let i = 1; i <= last.getDate(); i++) {
    // if (i % 7 === 1) {
    //   return `일요일:${i}`;
    // }
    calendar.push(i);
  }
  const thisMonth = last.getMonth() + 1;

  return { calendar, thisMonth };
};

// const ThisMonthSchedule = () => {
//   const now = dayjs();

//   // 이번 주 시작 날짜 (일요일 : 0, 월요일 : 1)
//   const thisYear = now.year();
//   const thisMonth = now.month() + 1;

//   const calendar = [];

//   return { calendar };
// };

export default addCalendar;
