/**
 * STACK [스택]
 *
 * 동작원리
 * 1. 삽입, 삭제가 리스트의 한쪽(Top)에서만 이루어진다 (후입선출 : 프링글스 과자)
 * 2. 0개 이상의 요소를 지닌 선형리스트의 일종
 * 3. 스택 ADT : init(), create(), is_empty(), is_full(), push(e), pop(), peek()
 * 4. 스택 연산 : top(), push(), pop(), isEmpty(), isFull()
 * 시간복잡도 : 삽입 O(1), 삭제 O(1), 탐색 O(n)
 * 예시 : 되돌리기 기능 구현 / 괄호검사 / 계산기 / 미로탐색 등
 */

const MAX_STACK_SIZE = 10;

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1; //입출력이 이루어지는 곳 => 비어있을 경우(초기상태) = -1
    this.stackSize = MAX_STACK_SIZE;
  }

  push(e) {
    if(!this.isFull()) {
      this.stack.push(e);
      this.top++;
    }
    else throw Error ('Stack is full');
  }

  pop() {
    if(!this.isEmpty()) {
      this.top--;
      this.stack.pop();
      // return this.stack.pop();
    }
    else throw Error ('Stack is empty');
  }

  //top 요소 반환 (삭제 X)
  peek() {
    return this.stack[this.top];
  }

  //스택에 element 없으면 true (비어있는지 검사)
  isEmpty() {
    return this.stack.length === 0 ? true : false;
  }

  //스택에 element 있으면 true (가득차있는지 검사)
  isFull() {
    return this.stack.length === this.stackSize ? true : false;
  }
}

const stack = new Stack();

// ✅ 입력 확인
for(let i = 1; i <= 10; i++) {
  stack.push(i);
}
console.log('스택 10개의 요소 삽입 : ', stack);
stack.pop();
// console.log(stack.pop());
// console.log('스택 1개의 요소 삭제 : ', stack);
// console.log('스택 top 반환 : ', stack.peek());
// console.log('스택 empty 확인 : ', stack.isEmpty());
// for(let i = 1; i <= 9; i++) {
//   stack.pop();
// }
// console.log('스택 pop 10번 후 empty 확인 : ', stack.isEmpty());
// // stack.pop(); //else throw Error ('Stack is empty');
// stack.push(1);
// console.log('스택 push 1번 후 full 확인 : ', stack.isFull());
// for(let i = 1; i <= 9; i++) {
//   stack.push(i);
// }
// console.log('스택 push 10번 후 full 확인 : ', stack.isFull());
// stack.push(1); //else throw Error ('Stack is full')