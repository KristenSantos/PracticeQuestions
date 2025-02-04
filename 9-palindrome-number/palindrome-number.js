/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numToSting = x.toString();
    let start = 0;
    for(let i = numToSting.length - 1; i >= 0; i--){
        if(numToSting[i] !== numToSting[start]){
            return false
        }
        start++;
    }
    return true
    

};