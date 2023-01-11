function solution(a, b, n) {
  let totalCola = 0;

  while(true){
    totalCola += parseInt(n/a)*b;
    n = parseInt(n/a)*b + (n%a);

    if(n/a < 1) {
      return totalCola;
    }
  }
}

// const [a,b,n] = [2,1,20]; //19
const [a,b,n] = [3,1,20]; //9
console.log(solution(a, b, n));