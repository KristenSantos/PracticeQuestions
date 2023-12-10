/**
 * @param {number[]} nums
 * @return {number}
 */
/*
P:
E:
D:
A:
C:
*/
var majorityElement = function(nums) {
    nums  = nums.sort((a,b) =>  a - b)
    return nums[Math.ceil(nums.length/2)-1]
};