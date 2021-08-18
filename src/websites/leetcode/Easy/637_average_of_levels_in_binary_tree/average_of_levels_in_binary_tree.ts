import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

// BFS solution
function averageOfLevels(root: TreeNode | null): number[] {
  const queue: Array<TreeNode> = [root];
  const result: Array<number> = [];

  while (queue.length) {
    const queueLength = queue.length;
    let level_sum = 0;

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      level_sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(level_sum / queueLength);
  }

  return result;
}
