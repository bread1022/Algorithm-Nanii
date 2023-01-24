function solution(a, b, n) {
  var totalCola = 0;

  while(parseInt(n / a)) {
    let get = parseInt(n / a) * b;
    let remain = n % a;
    n = get + remain;
    totalCola += get;
  }
  return totalCola;
}

// function solution(a,b,n) {

//   function getCola(a, b, n, total) {
//     let get = parseInt(n / a) * b;
//     let remain = n % a;
//     total += get;
//     if(parseInt(n / a) > 0) return getCola(a, b, get + remain, total);
//     else return total;
//   }

//   let answer = getCola(a, b, n, 0);
//   return answer;
// }


// const [a,b,n] = [2,1,20]; //19
const [a,b,n] = [3,1,20]; //9
console.log(solution(a, b, n));