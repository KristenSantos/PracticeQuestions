/**
 * @param {number[]} nums
 * @return {number}
 */
/*
P: Given an array of sorted numbers remove duplicates in place. 
E:
D:
A:
C:
*/


var removeDuplicates = function(nums) {
    let i = nums.length-1;
    while(i > 0){
        if(nums[i] === nums[i-1]){
            nums.splice(i,1)
        }
        i--
    }
};