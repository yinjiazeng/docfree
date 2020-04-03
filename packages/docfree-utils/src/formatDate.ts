const padStart = (num: number) => {
  return num.toString().padStart(2, '0');
};

export default function formatDate(time: number, extra?: boolean) {
  const date = new Date(time);
  let str = `${date.getFullYear()}/${padStart(date.getMonth() + 1)}/${padStart(date.getDate())}`;

  if (extra) {
    str += ` ${padStart(date.getHours())}:${padStart(date.getMinutes())}:${padStart(
      date.getSeconds(),
    )}`;
  }

  return str;
}
