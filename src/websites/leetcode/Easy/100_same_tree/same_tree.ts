import { TreeNode } from "../../../../common_data_structures/binary_tree/binary_tree";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const firstTree = traverseTree(p);
  const secondTree = traverseTree(q);

  function traverseTree(root: TreeNode | null) {
    if (root === null) return "null";

    const queue: Array<TreeNode> = [root];
    let resultArray: Array<number | string> = [];

    while (queue.length > 0) {
      const treeNode = queue.shift();
      const areNoValuePresented = treeNode === null || treeNode === undefined;

      const valueToPush = areNoValuePresented ? "null" : treeNode.val;
      resultArray.push(valueToPush);
      if (treeNode) {
        queue.push(treeNode.left);
        queue.push(treeNode.right);
      }
    }

    return resultArray.join(", ");
  }

  return firstTree === secondTree;
}
