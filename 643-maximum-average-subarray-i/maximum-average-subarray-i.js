/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 /*
 P: Given an array of numbers of unknown length and a value k find the largest average
 has to be contiugous and it has to be the length of k 

 E: [2,-4, 8, 9, 2, -1, 10, -11] k = 3
 6.33

 D:
 array
 A:

 C:
 */
var findMaxAverage = function(nums, k) {
    if(nums.length === 1) return nums[0]
    let max = -Infinity; 
    let start = 0; 
    let current = 0;
    for(let end = 0; end < nums.length; end++){
        current += nums[end]
        while ((end-start+1) >= k){
            max = Math.max(max, (current/k));
            current -= nums[start]
            start++
        }
        
    }
    console.log(max)
    return max

};