function getDate(date, locale = "en-us") {
  const currentDate = new Date(date);
  return `${currentDate.toLocaleString(locale, {
    month: "long",
  })} ${currentDate.getDate()}`;
}

function getTime(date) {
  const currentDate = new Date(date * 1000);
  return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
}

export function generateLabelAndData(timeFrame, allPrices) {
  const labels = [];
  const prices = [];
  switch (timeFrame) {
    case 1:
      allPrices.forEach((item) => {
        labels.push(getTime(item[0]));
        prices.push(item[1].toFixed(2));
      });
      break;
    case 7:
      allPrices.forEach((item) => {
        labels.push(getDate(item[0]));
        prices.push(item[1].toFixed(2));
      });
      break;
    case 31:
      allPrices.forEach((item) => {
        labels.push(getDate(item[0]));
        prices.push(item[1].toFixed(2));
      });
      break;
    case 180:
      allPrices.forEach((item) => {
        labels.push(getDate(item[0]));
        prices.push(item[1].toFixed(2));
      });
      break;
    case 365:
      allPrices.forEach((item) => {
        labels.push(getDate(item[0]));
        prices.push(item[1].toFixed(2));
      });
      break;
    default:
      break;
  }

  return { labels, prices };
}
