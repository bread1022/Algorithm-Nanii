/**
 * 100. Same Tree / Easy
 * https://leetcode.com/problems/same-tree/
 * 문제 해석 : 두개의 바이너리 트리가 같은지 확인하여 boolean반환
 * bfs로 확인하면서 틀렸을때 바로 false반환하게끔 구현
 *
 * 시간복잡도 : O(N^2) ..?
 * 공간복잡도 :
 */

 var isSameTree = function(p, q) {
  if(p === null && q === null) return true;
  if(p === null || q === null) return false;
  //false 를 걸러내야됨
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// var isSameTree = function(p, q) {
//   if(p === null && q === null) return true;
//   if(p === null || q === null) return false;
//   if((p.val !== q.val)) return false;
//   return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
// };


// const p = [1,2,3];
// const q = [1,2,3];
// isSameTree(p,q);