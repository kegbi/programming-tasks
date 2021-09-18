export class TrieNode {
  children: Array<TrieNode | null>;
  isEnd: boolean;

  constructor() {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
  }
}
