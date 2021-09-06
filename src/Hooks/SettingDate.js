const SettingTime = ({ startTime, endTime }) => {
  //
  // 12 ~ 23 => 오후
  // 24 ~ 11 => 오전
  // 24 = 오전 , 12 = 오후
  // 13 이상 23 이하 = 오후
  // 1 이상 11 이하 = 오전
  const timeHourStart = parseInt(startTime.slice(0, 2));
  const timeMinuteStart = startTime.slice(3, 5);
  const timeHourEnd = parseInt(endTime.slice(0, 2));
  const timeMinuteEnd = endTime.slice(3, 5);

  const startSettingTime =
    timeHourStart === 24
      ? `오전 ${timeHourStart - 12} : ${timeMinuteStart}`
      : timeHourStart === 12
      ? `오후 ${timeHourStart} : ${timeMinuteStart}`
      : `오후 0${timeHourStart} : ${timeMinuteStart}`;

  const endSettingTime =
    timeHourEnd > 12
      ? `오후 ${timeHourEnd - 12} : ${timeMinuteEnd}`
      : `오전 ${timeHourEnd} : ${timeMinuteEnd}`;
  return {
    startSettingTime,
    endSettingTime
  };
};

const SettingDate = date => {
  const settingDate = `${date.slice(5, 7)}월 ${date.slice(8, 11)}일`;
  return {
    settingDate
  };
};

export { SettingTime, SettingDate };
