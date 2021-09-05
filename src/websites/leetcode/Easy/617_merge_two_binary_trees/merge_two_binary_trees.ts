import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 || !root2) return root1 || root2;

  const queue: Array<[TreeNode, TreeNode]> = [[root1, root2]];

  while (queue.length > 0) {
    const pair = queue.shift();

    const firstNode = pair[0];
    const secondNode = pair[1];

    const areBothNodesPresented = firstNode && secondNode;

    if (areBothNodesPresented) {
      firstNode.val += secondNode.val;

      if (!firstNode.left) {
        firstNode.left = secondNode.left;
      } else {
        queue.push([firstNode.left, secondNode.left]);
      }

      if (!firstNode.right) {
        firstNode.right = secondNode.right;
      } else {
        queue.push([firstNode.right, secondNode.right]);
      }
    }
  }

  return root1;
}
