var lengthOfLastWord = function(s) {
  const filtered = s.split(' ').filter((element) => element.length !== 0);
  const result = filtered[filtered.length-1].length;
  return result;
};


//마지막 단어의 길이 반환하기
// s = "Hello World";
// s = "   fly me   to   the moon  ";
s = "luffy is still joyboy";
// s = "Today is a nice day";
console.log(lengthOfLastWord(s));