const arr = [ -4, 3, -9, 0, 4, 1 ];

function plusMinus(arr) {
  const n = arr.length;
  let result = [0,0,0];

  for(let a of arr) {
    if(a > 0) result[0] += 1;
    if(a < 0) result[1] += 1;
    if(a === 0) result[2] += 1;
  }
  return result.forEach((a)=>console.log((a/n).toFixed(6)));
}

plusMinus(arr);