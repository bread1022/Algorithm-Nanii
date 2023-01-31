/**
 * K번째 수 Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 *
 * @param {*} array
 * @param {*} commands
 * @returns
 */
 function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    let [i, j ,k] = command;
    answer.push(array.slice(i - 1, j)
    .sort((a, b) => a - b)
    .at(k - 1));
  });
  return answer;
}