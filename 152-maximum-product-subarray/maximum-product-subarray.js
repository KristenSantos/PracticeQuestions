/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSum = function(a, b, c){
    a *= c;
    b = Math.max(b, a);
    if(a === 0) a = 1;
}

var maxProduct = function(nums) {
    let maximumProduct = 0;
    let currentMax = 1;
    if(nums.length == 1){
        return nums[0]
    }
    for(let i = 0; i < nums.length; i++){
        currentMax *= nums[i];
        maximumProduct = Math.max(maximumProduct, currentMax);
        if (currentMax === 0) currentMax = 1
    }

    currentMax = 1;

    for(let i = nums.length-1; i >= 0; i--){
        currentMax *= nums[i];
        maximumProduct = Math.max(maximumProduct, currentMax);
        if (currentMax === 0) currentMax = 1
    }

    return maximumProduct
};