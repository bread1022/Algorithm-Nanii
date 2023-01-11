function solution(n) {
  const splitN = String(n).split('').reverse().map((e)=>Number(e));
  return splitN;
}

const n = 12345;
console.log(solution(n));