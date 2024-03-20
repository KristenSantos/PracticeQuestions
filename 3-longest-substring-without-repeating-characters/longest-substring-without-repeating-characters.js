/**
 * @param {string} s
 * @return {number}
 */
 /*
 sliding window

 */

var lengthOfLongestSubstring = function(str){
    const uniqueChar = new Set();
    let left = 0;
    let right = 0;
    let max = 0; 
    while(right < str.length){
        if(!uniqueChar.has(str[right])){
            uniqueChar.add(str[right]);
            right++;
            max = Math.max(max, right-left);
        } else {
            uniqueChar.delete(str[left]);
            left++
        }
    }
    console.log(max)
    return max
};