var plusOne = function(digits) {
  const number = (BigInt(digits.join(''))+1n).toString().split('');
  return number
};

// digits = [1,2,3];
digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// digits = [4,3,2,1];
// digits = [9];
// digits = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
console.log(plusOne(digits));