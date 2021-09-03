import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function lp(node) {
    if (!node) return 0;

    const left = lp(node.left);
    const right = lp(node.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }

  lp(root);

  return diameter;
}
