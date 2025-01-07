/**
 * @param {string} s
 * @return {number}
 */
 /*
 P: Given a string return the last word in the string
 E:
 D:
 A:
 C:
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");

  return s[s.length-1].length
};