/**
 * 102. Binary Tree Level Order Traversal / Medium
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * 문제해석 :
 *
 * 시간복잡도 : [Runtime 69 ms]
 * 공간복잡도 : [Memory 43.5 MB]
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let answer = []
  const recur = (root, index) => {
      if(root === null) return;
      if(root !== null) {
          !answer[index] ? answer.push([]) : null;
          answer[index].push(root.val);
      }
      recur(root.left, index + 1);
      recur(root.right, index + 1);
      return root;
  }
  recur(root, 0);

  return answer;
};

const root = [3,9,20,null,null,15,7];
// const root = [1];
// const root = [];
levelOrder(root);