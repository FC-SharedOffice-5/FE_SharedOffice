export const formatLocalDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};

export const formatTime = (date: Date) => date.toTimeString().split(' ')[0].slice(0, 5);

export const getInitialDates = () => {
  const today = new Date();

  const currentDate = formatLocalDate(today);
  const currentTime = formatTime(today);

  const end = new Date(today.getTime() + 60 * 60 * 1000);
  const endDate = formatLocalDate(end);
  const endTime = formatTime(end);

  return {
    currentDate,
    currentTime,
    endDate,
    endTime,
  };
};

export const formatUpdatedAt = (date: string) => {
  const updatedAt = new Date(date);
  const now = new Date();
  const diff = now.getTime() - updatedAt.getTime();
  const diffMinutes = Math.floor(diff / 1000 / 60);

  // 10분 이내에 올린 경우
  if (diffMinutes < 60 && diffMinutes > 0) {
    return `${diffMinutes}분 전`;
  }
  // 오늘 올린 경우
  else if (
    updatedAt.getDate() === now.getDate() &&
    updatedAt.getMonth() === now.getMonth() &&
    updatedAt.getFullYear() === now.getFullYear()
  ) {
    const hour = updatedAt.getHours();
    const minute = updatedAt.getMinutes();

    // 시간과 분이 한 자리일 경우 앞에 0 추가
    const formattedHour = hour < 10 ? '0' + hour : hour;
    const formattedMinute = minute < 10 ? '0' + minute : minute;

    return `${formattedHour}:${formattedMinute}`;
  }
  // 그 외의 경우
  else {
    const month =
      updatedAt.getMonth() + 1 < 10 ? '0' + (updatedAt.getMonth() + 1) : updatedAt.getMonth() + 1;
    const day = updatedAt.getDate() < 10 ? '0' + updatedAt.getDate() : updatedAt.getDate();

    return `${month}/${day}`;
  }
};
