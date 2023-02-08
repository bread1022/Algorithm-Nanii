class Queue {
  constructor () {
    this.q = [];
  }

  //현재 가장 앞에 있는 꺼내고자 하는 데이터
  front() {
    return this.q[0];
  }

  isEmpty() {
    return this.q.length === 0;
  }

  equeue(e) {
    this.q.push(e);
  }

  dequeue() {
    return this.q.shift();
  }
}

module.exports = Queue;