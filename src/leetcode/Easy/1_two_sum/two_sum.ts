// Brutforce solution

// export default function twoSum(nums: number[], target: number): number[] {
//   let hashmap: {};

//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     for (let i = index+1; i < nums.length; i++) {
//       if (hashmap[element+nums[1]]) {

//       }
//       const sum = element + nums[i];
//       if (sum === target) {
//         return [index, i]
//       }
//     }
//   }
// };


// Hashmap Solution
export default function twoSum(nums: number[], target: number): number[] | Error {
	let hashMap = {};
	
	for(let index = 0; index < nums.length; index++) {
		const number = nums[index];

		if(hashMap[target - number] !== undefined) {
			return [hashMap[target - number], index];
		}
		hashMap[number] = index;
	}

	return new Error("No two sum solution");
}