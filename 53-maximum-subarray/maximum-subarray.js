/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
 P:
 we're given an array of numbers
 return the largest sum from a sub array
 D: two pointer

 [-3,4,-1,2,1,-5,4]


 A: 
 Create a variable greatest sum; 

 
 */
var maxSubArray = function(nums) {

let currSum = 0 
let maxSum = nums[0];
if (nums.length === 1)return nums[0]
for(let i = 0; i < nums.length; i++){
    currSum += nums[i];

    if(maxSum < currSum){
        maxSum = currSum
    }
    if( currSum < 0 ){
        currSum = 0; 
    } 
}
    return maxSum
};