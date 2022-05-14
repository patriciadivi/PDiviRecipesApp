const getDate = () => {
  const today = new Date();
  let day = `${today.getDate()}`;
  const dez = 10;
  if (today.getDate() < dez) { day = `0${today.getDate()}`; }
  const date = `${day}/${today.getMonth() + 1}/${today.getFullYear()}`;
  return date;
};

export default getDate;
