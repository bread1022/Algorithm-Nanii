function staircase(n) {
  const base = Array(n).fill(' ');
  for(let i=1; i<=n; i++){
    console.log(base.fill('#', n-i, n).join(''));
  }
}


const n = 6;
staircase(n);