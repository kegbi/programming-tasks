import { TreeNode } from "../../common_data_structures/binary_tree/binary_tree";

export function treeFromArray(array: Array<number | null>) {
  if (array.length === 0) return null;

  let nextItem = 0;
  const root = new TreeNode(array[nextItem++]);
  const queue = [root];

  while (queue.length > 0 && nextItem < array.length) {
    const current = queue.shift();

    if (nextItem < array.length) {
      const item = array[nextItem++];

      if (item !== null) {
        const node = new TreeNode(item);
        if (current) {
          current.left = node;
          queue.push(node);
        }
      }
    }

    if (nextItem < array.length) {
      const item = array[nextItem++];

      if (item !== null) {
        const node = new TreeNode(item);
        if (current) {
          current.right = node;
          queue.push(node);
        }
      }
    }
  }

  return root;
}

export function arrayOfValuesFromTree(
  root: TreeNode | null
): Array<number | null> | null {
  if (root === null) {
    return null;
  }

  const queue: Array<TreeNode> = [root];
  let resultArray: Array<number | null> = [];

  while (queue.length > 0) {
    const treeNode = queue.shift();
    const areNoValuePresented = treeNode === null || treeNode === undefined;

    const valueToPush = areNoValuePresented ? null : treeNode.val;
    resultArray.push(valueToPush);
    if (treeNode) {
      queue.push(treeNode.left);
      queue.push(treeNode.right);
    }
  }

  function filterArrayFromNullsAtTheEnd(array) {
    const arrayCopy = [...array];
    while (arrayCopy[arrayCopy.length - 1] === null) {
      arrayCopy.pop();
    }

    return arrayCopy;
  }

  return filterArrayFromNullsAtTheEnd(resultArray);
}

export function treeValuesToString(root: TreeNode | null): string {
  if (root === null) return "null";

  const arrayOfValues = arrayOfValuesFromTree(root);

  function transformNullsToStringValues(element) {
    return element === null ? "null" : element;
  }

  return arrayOfValues.map(transformNullsToStringValues).join(", ");
}
