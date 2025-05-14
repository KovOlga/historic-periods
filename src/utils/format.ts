export const formatPeriod = (num: number): string => {
  return num < 9 ? `0${num}` : num.toString();
};
