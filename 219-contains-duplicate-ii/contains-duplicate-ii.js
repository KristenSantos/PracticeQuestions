/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 /*
 P: Given an array of numbers and and number k return true if there are two disinct
 i and j in the arr 
 E: 

 D: Array

 A:

 C:
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in map && Math.abs(map[nums[i]] - i) <= k){
            return true
        } else {
            map[nums[i]] = i 
        }
    }
    return false
};