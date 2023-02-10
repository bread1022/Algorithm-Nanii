/**

226. Invert Binary Tree / Easy
 * https://leetcode.com/problems/invert-binary-tree/
 * 문제해석 : 주어진 바이너리트를 뒤집은 바이너리트리를 root부터 왼쪽 순서대로 반환
 *
 * 시간복잡도 :
 * 공간복잡도 : 
 * 
 * @param {*} root
 */

var invertTree = function(root) {
  const recursiveInvert = (root) => {
      if(root === null) return null;
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
      recursiveInvert(root.left);
      recursiveInvert(root.right);
      return root;
  }
  recursiveInvert(root);
  return root;
};
const root = [4,2,7,1,3,6,9] // [4,7,2,9,6,3,1]
// const root = [2,1,3];
// const root = [];
invertTree(root);

// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val);
//   this.left = (left===undefined ? null : left);
//   this.right = (right===undefined ? null : right);
// }
// root.left; 형태로 존재
// root.right;