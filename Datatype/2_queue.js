/**
 * QUEUE [큐]
 *
 * 동작원리
 * 1. 삽입은 tail 에서, 삭제는 head 이루어진다 (선입선출 : FIFO = first - in - first - out)
 * 2. 데이터를 넣을 때마다 요소가 이동
 * 3. 입력된 순서대로 순차적으로 처리
 * 4. 큐 ADT : head, tail, enqueue, dequeue, isEmpty, size
 * 5. 큐 연산 : enqueue(), dequeue(), isEmpty(), size()
 * 시간복잡도 : 삽입 O(1), 삭제 O(n), 탐색 O(n)
 * 예시 : BFS탐색, 컴퓨터 버퍼에서 주로 사용, 순차적으로 처리해야하는 분야에서 활용
 */

const MAX_QUEUE_SIZE = 10;

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail;
    this.queueSize = MAX_QUEUE_SIZE;
  }

  //tail에서 추가
  enqueue(e) {
    if(this.size() < this.queueSize) {
      this.queue.push(e);
      this.tail = this.queue.length - 1;
    } else throw Error ('Queue is full');
  }

  //head에서 삭제
  dequeue() {
    if(this.size() > 0) {
      this.queue.shift();
      this.tail = this.queue.length - 1;
    } else throw Error ('Queue is empty');
  }

  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }

  size() {
    return this.queue.length;
  }

  //연산이 아닌데 구현..했네..요
  front() {
    if(!this.isEmpty()) {
      return this.queue[this.head];
    } else throw Error ('Queue not exist');
  }

  rear() {
    if(!this.isEmpty()) {
      return this.queue[this.tail];
    } else throw Error ('Queue not exist');
  }
}

const queue = new Queue();

// ✅ 입력 확인
for(let i = 1; i <= 10; i++) {
  queue.enqueue(i);
}
console.log('큐 10개의 요소 삽입 : ', queue);
queue.dequeue();
console.log('큐 1개의 요소 삭제 : ', queue);
console.log('큐 head 반환 : ', queue.front());
console.log('큐 empty 확인 : ', queue.isEmpty()); //false
for(let i = 1; i <= 9; i++) {
  queue.dequeue();
}
console.log('큐 dequeue 10번 후 empty 확인 : ', queue.isEmpty());
// queue.dequeue(); //Error: Queue is empty
for(let i = 1; i <= 9; i++) {
  queue.enqueue(i);
}
queue.enqueue(100);
console.log(queue);
// queue.enqueue(200); // Error: Queue is full