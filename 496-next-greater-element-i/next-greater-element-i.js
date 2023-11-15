/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 /*
 P:
 E:
 D:
 A:
 C:
 */

var nextGreaterElement = function(nums1, nums2) {
    let greaterElements = [];
    for(let i of nums1){
        let x = -1;
        for(let j = nums2.length; nums2[j] != i; j--){
            if(nums2[j] > i) x = nums2[j]
        }
        greaterElements.push(x)
    }
    return greaterElements
}

