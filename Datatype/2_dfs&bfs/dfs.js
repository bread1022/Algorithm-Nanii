/**
 * <그래프탐색 알고리즘>
 * DFS : 깊이우선탐색
 * 과정
 * 1. 탐색 시작 노드를 스택에 삽입하고 방문처리
 * 2. 스택 최상단 노드에 방문하지 않은 인접 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문처리
 *    (방문안한 인접노드 없으면 스택에서 최상단 노드 꺼냄)
 * 3. 더이상 꺼낼 최상단 노드가 없을 때까지 반복
 */

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


let visited = [];
const dfs = (start) => {
  visited.push(start);

  for(let i = 0; i < graph[start].length; i ++) {
    let node = graph[start][i];
    if(!visited.includes(node)) dfs(node);
  }

  return visited;
}

console.log('DFS', dfs(1));