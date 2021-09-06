import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

export function lowestCommonAncestor(
  root: TreeNode | null,
  node1ToFind: TreeNode | null,
  node2ToFind: TreeNode | null
): TreeNode | null {
  let node = root;

  while (node) {
    if (node.val > node1ToFind.val && node.val > node2ToFind.val) {
      node = node.left;
    } else if (node.val < node1ToFind.val && node.val < node2ToFind.val) {
      node = node.right;
    } else {
      return node;
    }
  }

  return null;
}
