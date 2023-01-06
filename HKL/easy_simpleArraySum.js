function simpleArraySum(ar) {
  return ar.reduce((a,b) => a+b);
}

const ar = [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(ar));