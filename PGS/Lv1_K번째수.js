function solution(array, commands) {
//map 쓰는 것도 좋겠다.. 배열반환!
  let result = [];
  for(const command of commands) {
    const  start = command[0] - 1;
    const end = command[1];
    const index = command[2] - 1;

    const slicedArray = array.slice(start, end).sort((a,b) => a-b);
    result.push(slicedArray[index]);
  }
  return result;
}

const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
const array = [1, 5, 2, 6, 3, 7, 4];
console.log(solution(array, commands));