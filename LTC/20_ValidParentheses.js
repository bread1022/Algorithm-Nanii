var isValid = function(s) {
  let result = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '('|| s[i] === '['|| s[i] === '{') {
      result.push(s[i]);
    } else if(s[i] === ')' && result[result.length-1] == '(' && result.length > 0) {
      result.pop();
    } else if(s[i] === ']' && result[result.length-1] == '[' && result.length > 0) {
      result.pop();
    } else if(s[i] === '}' && result[result.length-1] == '{' && result.length > 0) {
      result.pop();
    } else {
      return false;
    }
  }
  return result.length === 0? true : false;
};

// s = "(]"
// s = "{[]}"
s = "{[[()]][]}"
// s = "]"
console.log(isValid(s));

//stack 이용???