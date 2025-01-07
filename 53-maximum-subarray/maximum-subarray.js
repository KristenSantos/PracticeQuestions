/**
 * @param {number[]} nums
 * @return {number}
 */
 /*

 */
var maxSubArray = function(nums) {
    let maximumValue = nums[0];
    let currentRunningSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(currentRunningSum < 0) currentRunningSum = 0;
        currentRunningSum += nums[i];
        maximumValue = Math.max(maximumValue, currentRunningSum)
    }
    return maximumValue

};