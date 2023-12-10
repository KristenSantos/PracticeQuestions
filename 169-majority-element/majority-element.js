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
    console.log(nums)
    return nums[Math.ceil(nums.length/2)-1]
};