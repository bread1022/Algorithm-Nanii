/**
 * 1914. 하노이탑 / 실버
 * https://www.acmicpc.net/problem/1914
 *
 * 문제해석 : a, b, c 의 장대를 두고 원반을 a -> c 로 옮기는 것
 *
 * base case : n === 0
 * 재귀함수 구현시 스택오버플로우를 방지하기 위해 최소한의 문제를 규정하고,
 * 재귀호출하지 않고 해결할 수 있는 부분을 만들어 값을 바로 반환할 수 있게 해야됨
 *
 * recursive case : a -> b 로 임시로 옮겨두고, 다음 원반을 a -> c,  앞전에 작은 원반을 b -> c 반복
 * 결과 : 테스트케이스는 작동하는데 채점중(40%를 넘기지 못하고 실패하였습니다..)
 *
 * 시간복잡도 :
 * 공간복잡도 :
 */
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let move = [];
function main(input) {
  const n = Number(input);
  console.log((2n ** BigInt(n) - 1n).toString());
  if(n <= 20) {
    hanoi(n, 1, 2, 3);
    console.log(move.join('\n'));
  };
}

function hanoi(n, a, b, c) {
  if(n === 0) return;
  hanoi(n - 1, a, c, b);  // A -> B
  move.push(`${a} ${c}`); // A -> C (출발지) -> (목적지)
  hanoi(n - 1, b, a, c); // B -> C
}

main(input);