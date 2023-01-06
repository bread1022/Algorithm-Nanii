function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if(min === max) {
    console.log(min * 4, max * 4);
    return;
  } else {
    const minArray = arr.filter((a) => a < max);
    const maxArray = arr.filter((a) => a > min);
    console.log(minArray.reduce((a,b) => a + b), maxArray.reduce((a,b) => a + b));
  }
}

const arr = [5, 5, 5, 5, 5];
// const arr = [7, 69, 2, 221, 8974];
miniMaxSum(arr);