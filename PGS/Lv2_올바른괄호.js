function solution(s){
    const stack = [s[0]];
    for (let i=1; i<s.length; i++) {
        if(s[i] === '(') {
            stack.push(s[i]);
        }
        else if(stack.length > 0 && s[i] === ')') stack.pop();
    }
    return stack.length === 0? true : false;
}

const s = "(())()";
// const s = "(()(";

//push,pop
//괄호문제는 stack 이용
console.log(solution(s));