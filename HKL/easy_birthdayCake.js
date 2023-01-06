function birthdayCakeCandles(candles) {
  const maxValue = Math.max(...candles);
  let result = 0;
  candles.forEach(candle => candle === maxValue ? result++ : null);
  return result;
}

const candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));