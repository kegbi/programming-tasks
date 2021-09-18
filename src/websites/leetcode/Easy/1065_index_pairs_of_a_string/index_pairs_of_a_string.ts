import { TrieNode } from "../../../../common_data_structures/trie/trie";

export function indexPairs(text: string, words: string[]): number[][] {
  let result = [];

  let trie = new TrieNode();
  for (let word of words) {
    let current = trie;
    for (let i = 0; i < word.length; i++) {
      let index = word.charCodeAt(i) - "a".charCodeAt(0);
      let next = current.children[index];
      if (!next) {
        current.children[index] = new TrieNode();
      }
      if (i === word.length - 1) {
        current.children[index].isEnd = true;
      }
      current = current.children[index];
    }
  }

  for (let i = 0; i < text.length; i++) {
    let index = i;
    let current = trie;
    while (index < text.length) {
      current = current.children[text.charCodeAt(index) - "a".charCodeAt(0)];
      if (!current) {
        break;
      }
      if (current.isEnd) {
        result.push([i, index]);
      }
      index++;
    }
  }

  return result;
}
