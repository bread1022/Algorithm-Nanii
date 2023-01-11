function solution(s) {
  const str = s.length;

  if(str % 2 === 0) {
      return s.slice((str/2)-1, (str/2)+1);
  } else {
      return s.slice(Math.ceil(str/2)-1, Math.ceil(str/2));
  }
}

const s = "abced";
console.log(solution(s));


//return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);