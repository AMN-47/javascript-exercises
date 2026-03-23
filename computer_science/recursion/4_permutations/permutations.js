const permutations = function(nums) {
    //1. Base Case = if Array is empty
    if (nums.length === 0) {
        return[[]];
    }

    const result = [];
    //2. Iterate through each number in the array to treat it as the first element
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        //3. Ceate sub array for all numbers excepr for the currnr 1
        const remainingNums = nums.filter((_, index) => index !== i);

        //4. Recursive step: Get all permutations of the remaining numbers.
        const innerPermutations = permutations(remainingNums);

        //combine and atach the current number to the front of the inner permutation
        for (let subPermutation of innerPermutations) {
            result.push([currentNum,...subPermutation]);
        }
    }
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
