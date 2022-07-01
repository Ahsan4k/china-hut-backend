const showTimes = () => {
  let result = "";
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + "";
  }
  return result;
};

module.exports = showTimes;
