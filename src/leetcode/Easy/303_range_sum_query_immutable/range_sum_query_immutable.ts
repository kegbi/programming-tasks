export default class NumArray {
  numbersArray: number[];

  constructor(nums: number[]) {
    this.numbersArray = nums;

    for (let i = 1; i < nums.length; i++) {
      this.numbersArray[i] = this.numbersArray[i] + this.numbersArray[i - 1];
    }

    this.numbersArray.unshift(0);
  }

  sumRange(left: number, right: number): number {
    return this.numbersArray[right + 1] - this.numbersArray[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
