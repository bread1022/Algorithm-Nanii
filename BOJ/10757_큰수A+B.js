const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input5.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

function main() {
  let {a, b, length} = parseInput(input);
  let temp = 0;
  let answer = '';

  for(let i = length - 1; i >= 0; i --) {
    let numA = Number(a[i]);
    let numB = Number(b[i]);

    let unit = numA + numB + temp;

    if(unit > 9) {
      temp = 0;
      answer = unit % 10 + answer;
      temp = 1;
    } else {
      answer = unit + answer;
      temp = 0;
    }
  }
  if(temp) answer = temp + answer;
  console.log(answer);
}

function parseInput(input) {
  let [a, b] = [input[0], input[1]];
  let length;

  if(a.length > b.length) {
    b = b.padStart(a.length, '0');
    length = a.length;
  } else {
    a = a.padStart(b.length, '0');
    length = b.length;
  }

  return {
    a,
    b,
    length
  }
}

main();