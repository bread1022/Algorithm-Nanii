function solution(progresses, speeds) {
  let answer = [0];
  let day = progresses.map((progress, index)=>Math.ceil((100-progress)/speeds[index]));

  let first = day[0];
  for(let i=0, j=0; i<day.length; i++) {
    if(first >= day[i]) {
      answer[j] += 1;
    } else {
      first = day[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

const progresses = [93, 39, 55];
const speeds = [1, 30, 5];
// const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));