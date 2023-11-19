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
var pivotIndex = function(nums) {
    let totalSum = 0;

    for(let i = 0; i < nums.length; i++){
        totalSum += nums[i]
    }

     let leftSum = 0;
     for(let i = 0; i < nums.length; i++){
         let rightSum = totalSum - leftSum - nums[i]
         if(rightSum === leftSum) return i

         leftSum += nums[i]
     }
    return -1
};