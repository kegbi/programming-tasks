import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

// BFS solution
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let treeDepth = 0;
  const queue: Array<TreeNode> = [root];

  while (queue.length) {
    const queueLength = queue.length;
    treeDepth++;

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return treeDepth;
}
