const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function main() {
  let res;
  const total =  input.reduce((a, b) =>a + b);
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input.length - 1; j++) {
      let sum = input[i] + input[j];
      if(total - sum === 100 && i !== j) {
        res = input
        .filter((_, idx) => idx !== i && idx !== j)
        .sort((a, b) => a - b);
      }
    }
  }
  // console.log(res);
  res.forEach((e) => console.log(e));
}

main();