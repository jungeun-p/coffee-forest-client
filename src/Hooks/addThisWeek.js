const addThisWeek = () => {
  let calendar = [];

  const formatDate = date => {
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth() + 1;
    const thisWeekDay = date.getDate();

    const addZero = num => {
      if (num < 10) {
        num = '0' + num;
      }
      return num;
    };
    const weekarticle = `${addZero(thisYear)}-${addZero(thisMonth)}-${addZero(
      thisWeekDay
    )}`;
    return weekarticle;
  };

  const now = new Date();
  const nowDayOfWeek = now.getDay();
  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const nowYear = now.getFullYear();
  // const formatWeek = () => {
  //   for (let i = 1; i < 6; i++) {
  //     const thisWeekDate = new Date(
  //       nowYear,
  //       nowMonth,
  //       nowDate - nowDayOfWeek + i
  //     );
  //     console.log(thisWeekDate);
  //   }
  // };
  const weekStartDate = new Date(
    nowYear,
    nowMonth,
    nowDate + (1 - nowDayOfWeek)
  );
  const weekDate1 = new Date(nowYear, nowMonth, nowDate + (2 - nowDayOfWeek));
  const weekDate2 = new Date(nowYear, nowMonth, nowDate + (3 - nowDayOfWeek));
  const weekDate3 = new Date(nowYear, nowMonth, nowDate + (4 - nowDayOfWeek));
  const weekEndDate = new Date(nowYear, nowMonth, nowDate + (5 - nowDayOfWeek));

  calendar.push(formatDate(weekStartDate));
  calendar.push(formatDate(weekDate1));
  calendar.push(formatDate(weekDate2));
  calendar.push(formatDate(weekDate3));
  calendar.push(formatDate(weekEndDate));

  return calendar;
};

export default addThisWeek;
