import dayjs from 'dayjs';

// 時間格式化
const timeFilter = (datetime) => {
  const datetimeFormatted = dayjs(datetime).format('YYYY/MM/DD HH:MM');
  return datetimeFormatted;
};

//  回傳到目前經歷多少時間
const toNow = (datetime) => {
  const totalHours = (dayjs().diff(dayjs(datetime), 'h'));
  const day = Math.floor(totalHours / 24);
  const restHours = totalHours % 24;
  const str = `${day} 天又 ${restHours} 小時`;

  return str;
};

export {
  timeFilter,
  toNow,
};
