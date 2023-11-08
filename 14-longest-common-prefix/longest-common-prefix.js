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
 1. Wanna start by sorting the words in the array this will allow us to just compare the first and last words in the array because the are sorted in alphabetical order so if there is no common prefix we will be able to tell immediatley
 2. Next we want to iterate through only the length of the first word using a for loop
 3. we can use an if condition to check to see if the letters in the first word are the same and if they are not return that using the substring method starting from 0, and up to i but not including i, 
 4. Lastly if this condition is never hit we know that all of the words are the same sp we can return the entire first word(or really any from the array)
 C:
 */

















 
var longestCommonPrefix = function(strs) {
    strs.sort();
    for(let i = 0; i <= strs.length; i++){
        if(strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].substring(0, i)
        }
    }
    return strs[0]
};