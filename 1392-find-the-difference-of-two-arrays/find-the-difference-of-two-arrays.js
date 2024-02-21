/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function(nums1, nums2) {
    const answer = [[],[]];
    const nums1Set = new Set();
    const nums2Set = new Set();

    for(let i = 0; i < nums1.length; i++){
        if(!nums2.includes(nums1[i])){
            nums1Set.add(nums1[i])
        } 
    }

    for(let i = 0; i < nums2.length; i++){
        if(!nums1.includes(nums2[i])){
            nums2Set.add(nums2[i])
        } 
    }
    nums1Set.forEach((values) => {
        answer[0].push(values)
    })

    nums2Set.forEach((values) => {
        answer[1].push(values)
    })
  
    return answer
};

