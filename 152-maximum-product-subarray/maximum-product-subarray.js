/**
 * @param {number[]} nums
 * @return {number}
 */



var maxProduct = function(nums) {
    let max = -Infinity;
    let current = 1;

    for(let i = 0; i < nums.length; i++){
        current *= nums[i]
        if(current > max){
            max = current;
        }
        if(current ===  0) current = 1
    }
    
    current = 1;

    for(let i = nums.length-1; i >= 0; i--){
        console.log(nums[i])
        current *= nums[i]
        if(current > max){
            max = current;
        }
        if(current ===  0) current = 1

    }
    return max
};