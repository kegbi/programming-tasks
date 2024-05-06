// complete the implementation
export class PriorityQueue<T> {
  private items: T[] = [];
  private readonly compare: (a: T, b: T) => number;

  /**
   * @param {(a: number, b: number) => number} compare -
   * Compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
  }

  /**
   * return {number} amount of items
   */
  size(): number {
    return this.items.length;
  }

  /**
   * returns the head element
   */
  peek(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    } else {
      return this.items[0];
    }
  }

  /**
   * @param {any} element - new element to add
   */
  add(element: T) {
    this.items.push(element);
    this.items = this.items.sort(this.compare);
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    if (this.items.length === 0) {
      return undefined;
    } else {
      return this.items.shift();
    }
  }
}
