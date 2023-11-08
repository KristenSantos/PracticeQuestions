/**
 * @param {string[]} strs
 * @return {string}
 */
 /*
 P: Find the longest common prefix within the given array of strings. If prefix not found return an empty string.
 E: Input: ["unhappy", "untrue, untidy"], output: "un";
 input: ["super", "cat", "person"], output: "";
 input: ["overwork", "overdue", "overeat"]; output: "over"
 D: strings
 A:
 C:
 */

 
var longestCommonPrefix = function(strs) {
    strs.sort();
    for(let i = 0; i < strs[0].length; i++){
        if(strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].substring(0, i)
        }
    }
    return strs[0]
};