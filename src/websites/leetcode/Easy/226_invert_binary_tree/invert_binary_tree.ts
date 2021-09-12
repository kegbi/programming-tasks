import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

// Recursive
// export function invertTree(node: TreeNode | null): TreeNode | null {
//   if (node) {
//     [node.left, node.right] = [invertTree(node.right), invertTree(node.left)];
//   }
//
//   return node;
// }

// Iterative (BFS)
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const queue: Array<TreeNode> = [root];

  while (queue.length) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];

    if (node.right) {
      queue.push(node.right);
    }
    if (node.left) {
      queue.push(node.left);
    }
  }

  return root;
}
