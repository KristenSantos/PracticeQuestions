/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1

    while(left < right){
        if(s[left] !== s[right]){
            let skipLeft = s.substring(left+1, right+1);
            let skipRight = s.substring(left, right);

            if(skipLeft === skipLeft.split("").reverse().join("") || skipRight === skipRight.split("").reverse().join("")){
                return true
            } else {
                return false
            }
        }
        right--
        left++
    }
    return true
};