const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input3.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// function main() {
//   const valueMap = new Map();
//   valueMap.set('black', 0);
//   valueMap.set('brown', 1);
//   valueMap.set('red', 2);
//   valueMap.set('orange', 3);
//   valueMap.set('yellow', 4);
//   valueMap.set('green', 5);
//   valueMap.set('blue', 6);
//   valueMap.set('violet', 7);
//   valueMap.set('grey', 8);
//   valueMap.set('white', 9);

//   const firstColor = valueMap.get(input[0]);
//   const secondColor = valueMap.get(input[1]);
//   const thirdColor = valueMap.get(input[2]);

//   const answer = (10*firstColor + secondColor) * 10**thirdColor;
//   console.log(answer);
// }

// main();

//Map 으로 바꿔봤는데 별로 차이 안난다..객체도 key, value이용하면 빠른가보다

function main() {
  const valueOfColors = {
    black : 0,
    brown : 1,
    red	: 2,
    orange : 3,
    yellow : 4,
    green : 5,
    blue : 6,
    violet : 7,
    grey : 8,
    white : 9,
  }
  const firstColor = valueOfColors[input[0]];
  const secondColor = valueOfColors[input[1]];
  const thirdColor = valueOfColors[input[2]];

  const answer = (10*firstColor + secondColor) * 10**thirdColor;
  console.log(answer);
}

main();