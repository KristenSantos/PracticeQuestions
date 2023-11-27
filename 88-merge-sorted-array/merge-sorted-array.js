/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
P: Merge two non-decreasing ordered array
E:
D:
A:
C:
*/
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m)
    nums2.splice(m, nums1.length - m)
    let i = m+n-1
    m--
    n--
    while(n >= 0){
        nums1[i--] = (m >= 0 && nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--]
    }
};