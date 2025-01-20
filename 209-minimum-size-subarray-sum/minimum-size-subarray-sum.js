/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity; 
    let curr = 0; 
    let start = 0; 
    for(let i = 0; i < nums.length; i++){
        curr += nums[i];
        while(curr >= target){
            min = Math.min(min, i - start + 1)
            curr -= nums[start];
            start++
        };
    
    }
    
    return min === Infinity ? 0 : min
};