/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 /*
 P: Given two arrays the first array being a subset of the second array
 if the number has a next greater element

 E:  input: nums1:[9,8,2], nums2:[2,6,8,1,7,9]
     output: [-1, 9, 6]
 D: Array
 A: 
 Start by intializing a new array this is the array that we will be returning at the end
 We want to iterate through the first array to get the element to compare in the second array
 Next we want to initalize a new variable this is what will be the next greater element so we set this to -1 and reassign if we find a number larger than i 
 Following that we want to create a for loop that iterates backward through nums2 unitil it finds the element i from nums 1 
 next we want to check and see if that number in nums2 is greater than i and if it is reasign x to be nums2[j]
 following that we should push x into the array and countinue throught the nums1 array
 return the array at the end

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

