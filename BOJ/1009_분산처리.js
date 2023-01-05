const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input2.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

function main() {
  for(let i = 1; i <= input[0]; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const unitArr = units(a, b);
    console.log(unitArr);
  }
}

function units(a, b) {
  let unitArr = [];
  let init = 1;

  while(b) {
    init = (init * a) % 10;
    if(init === 0) return 10;
    else if(!unitArr.includes(init)) {
      unitArr.push(init);
    } else {
      return unitArr.at((b -1) % unitArr.length);
    };
  }
}

main();