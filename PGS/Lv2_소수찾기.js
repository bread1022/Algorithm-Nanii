/**
 * 소수찾기 Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 문제해석 : 1 <= n <= 7
 * 소수 : 1보다 큰 자연수 중 자기자신만을 약수로 가지는 경우의 수 리턴 (isPrime :(2 ~ n**(1/2)+1) n % i === 0 ? false)
 * 깊이우선탐색 -> 스택/재귀로 DFS구현
 * (1) 모든 숫자조합을 재귀함수로 생성 (매개변수 어떤걸 넣어줘야 할지 잘 생각해야됨😭), Set으로 중복 제거
 * (2) 소수의 갯수만 count - 에라토스테네스의 체 (그 숫자의 루트 씌운 값까지만 확인하면 된다)
 *
 * 시간복잡도 : O(n^2) -> [...numSet]배열 forEach돌면서 isPrime for문으로 소수 확인
 * 공간복잡도 :
 *
 * @param {*} numbers
 * @returns
 */
const solution = (numbers) => {
  let numSet = new Set(); // Set(6) { 0, 1, 11, 10, 101, 110 }

  //숫자조합 만드는 재귀함수
  const combination = (comb, others) => {
    if(comb !== "") {
      numSet.add(Number(comb)); // string을 넣으면 011, 11을 다르게 판단
    }
    for(let i = 0; i < others.length; i++) {
      combination(comb + others.charAt(i), others.substring(0,i) + others.substring(i+1));
    }
  }

  combination("", numbers);

  const isPrime = (n) => {
    if(n === 0 || n === 1) return false;
    for(let i = 2; i < Math.sqrt(n) + 1; i++) {
      if(n % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  [...numSet].forEach((n) => {
    if(isPrime(n)) count ++;
  });
  return count;
}

// const numbers = "17"
// const numbers = "011";
const numbers = "143";
console.log(solution(numbers));