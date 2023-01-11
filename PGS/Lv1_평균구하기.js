function solution(arr) {
  return arr.reduce((a,b) => a+b)/arr.length;
}

const arr = [1,2,3,4]; //2,5
// const arr = [5,5];  //5
console.log(solution(arr));