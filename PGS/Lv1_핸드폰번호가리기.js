function solution(phone_number) {
  const replaceNumber = '*'.repeat(phone_number.length-4);
  const sliceNumber = phone_number.slice(-4);

  return replaceNumber+sliceNumber;
}

// const phone_number = "01033334444";
const phone_number = "027778888";

console.log(solution(phone_number));