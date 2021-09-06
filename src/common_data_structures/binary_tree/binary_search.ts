import { TreeNode } from "./binary_tree";

export function binarySearchInBST(root: TreeNode | null, key): TreeNode | null {
  if (root === null || root.val === key) return root;

  if (root.val < key) return binarySearchInBST(root.right, key);

  return binarySearchInBST(root.left, key);
}
