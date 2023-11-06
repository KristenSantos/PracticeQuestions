/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 /*
 P: Given an array of number return an array of indices of the two numbers that add up to the target value given.

 E: Input: [0, 5, 7, 0, 4, 6, 3, 6], 8
 Output: [1, 6]

 D: Return an Array, 
 Use a map for optimal solution

 A:
Create a Map data structure. This is gonna be designed to store the number and its index

Create a for loop that goes through the array 

use get and set Map methods to 

 C:
 */

var twoSum = function(nums, target) {
    let sum = new Map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(sum.has(complement)){
            return [sum.get(complement), i];
        }
        else{
            sum.set(nums[i], i)
        }
    }
}
