/**
 * 509. Fibonacci Number
 * https://leetcode.com/problems/fibonacci-number/
 * 문제 해석
 *
 * 시간복잡도 : O(n^2)
 * 공간복잡도 :
 *
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n === 0 || n === 1) return n;
  else return fib(n - 1) + fib(n - 2);
};

// const n = 2 //1
// const n = 3 //2
const n = 4 // 3
console.log(fib(n));