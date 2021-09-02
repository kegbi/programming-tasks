import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

// DFS stack solution
// export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   if (!root) {
//     return false;
//   }
//
//   const rootValue = root.val;
//   const stack: Array<[number, TreeNode]> = [[rootValue, root]];
//
//   while (stack.length) {
//     const element = stack.shift();
//     const value = element[0];
//     const node: TreeNode = element[1];
//
//     const leftLeafPresented = node.left && node.left.val !== undefined;
//     const rightNodePresented = node.right && node.right.val !== undefined;
//
//     if (!leftLeafPresented && !rightNodePresented) {
//       if (value === targetSum) {
//         return true;
//       }
//     }
//
//     if (leftLeafPresented) {
//       stack.push([value + node.left.val, node.left]);
//     }
//     if (rightNodePresented) {
//       stack.push([value + node.right.val, node.right]);
//     }
//   }
//
//   return false;
// }

// DFS recursion solution
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  targetSum = targetSum - root.val;

  if (!root.left && !root.right) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}
