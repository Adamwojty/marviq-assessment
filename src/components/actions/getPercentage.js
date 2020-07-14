export const getPercentage = (data, MACHINE) => {
  if (data) {
    const item = data.filter((item) => item.MACHINE === MACHINE);
    const percentage = Math.floor(item[0].OEE * 100);
    return percentage;
  }
};
