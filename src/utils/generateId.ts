export const generateRandomId = () => {
  const min = Math.pow(10, 10 - 1);
  const max = Math.pow(10, 10) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
