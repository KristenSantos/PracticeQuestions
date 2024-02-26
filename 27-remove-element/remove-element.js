/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 /*
 P: 
Given an array of numbers and a number value remove all occurences where the value appears in the number array in-place. Then return the number od elements in the nums array that are not equal to val.
 E:
 D:
 A:
 C:
 */

var removeElement = function(nums, val) {
    let left = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[left] = nums[i]
            left++
        }
        
    }
    return left
    console.log(left)
};