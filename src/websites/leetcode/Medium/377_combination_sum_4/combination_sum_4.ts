// DP O(n*m)
export function combinationSum4(nums: number[], target: number): number {
    const cacheArray: number[] = new Array(target + 1).fill(0);

    cacheArray[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                cacheArray[i] += cacheArray[i - num];
            }
        }
    }

    return cacheArray[target];
}
