import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  if (!root || !subRoot) {
    return false;
  } else if (isSameTree(root, subRoot)) {
    return true;
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }

  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = [[p, q]];
    while (stack.length) {
      [p, q] = stack.pop();
      if (p && q && p.val === q.val) {
        stack.push([p.left, q.left], [p.right, q.right]);
      } else if (p || q) {
        return false;
      }
    }

    return true;
  }
}
