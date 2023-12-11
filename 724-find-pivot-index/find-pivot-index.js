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
    const sum = nums.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0 )
    let leftTotal = 0;
    for(let i = 0; i < nums.length; i++){
         const rightTotal = sum - leftTotal - nums[i]
        if(leftTotal === rightTotal){
            return i
        }
        leftTotal+= nums[i]
    }
    return -1

};





















    // let total = 0;
    // let leftSum = 0 
    // for(let i = 0; i < nums.length; i++){
    //     total += nums[i]
    // }
    // for(let i = 0; i < nums.length; i++){
    //     let rightSum = total - leftSum - nums[i]
       
    //     if(leftSum === rightSum){
    //         return i
    //     }
    //     leftSum += nums[i]
    // }
    // return -1