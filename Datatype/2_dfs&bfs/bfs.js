/**
 * <그래프탐색 알고리즘>
 * BFS : 너비우선탐색
 * 과정
 * 1. 시작노드를 큐에 삽입하고 방문처리 [visit] = true
 * 2. 큐에서 노드를 꺼낸 뒤 해당 노드의 인접 노드 중 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리
 * 3. 더이상 꺼낼 노드가 없을 때까지 과정 반복
 */

const Queue = require('../q');
const graph = [
  [], //0번노드
  [2,3,8], //1번 노드 부터 시작
  [1,7],
  [1,4,5],
  [3,5],
  [3,4],
  [7],
  [2,6,8],
  [1,7] //8번 노드
];

const bfs = start => {
  let queue = new Queue();
  let visited = [];

  queue.equeue(start);
  visited.push(start);

  while(!queue.isEmpty()) {
    for(let i = 0; i < graph[start].length; i ++) {
      let node = graph[start][i];
      if(!visited.includes(node)) {
        queue.equeue(node);
        visited.push(node);
      }
    }
    start = queue.dequeue();
  }
  return visited;
}


console.log('BFS', bfs(1));