function diagonalDifference(arr) {
  let input1 = 0;
  let input2 = 0;

  for(let i=0; i<arr.length; i++) {
    input1 += arr[i][i]
    input2 += arr[arr.length-1-i][i];
  }
  return Math.abs(input1 - input2);
}

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
// const arr = [[-1,1,-7,-8], [-10,-8,-5,-2], [0,9,7,-1], [4,4,-2,1]];
console.log(diagonalDifference(arr));