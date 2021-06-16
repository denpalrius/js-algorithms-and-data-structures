/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // if(!nums || !nums.length || !target) return [];

    const dictionary = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (dictionary.get(diff) >= 0) {
            return [dictionary.get(diff), i];
        }
        dictionary.set(nums[i], i);
    }
};