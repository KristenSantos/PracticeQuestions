/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1;
    while(left < right){
        if(s[right] !== s[left]){
            let skipLeft = s.slice(left+1, right+1);
            let skipRight = s.slice(left, right);
            return isPalindrome(skipLeft) || isPalindrome(skipRight)
        }
        left++;
        right--

    }

    return true

};

function isPalindrome(str){
    let left = 0; 
    let right  = str.length -1; 
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++;
        right--;
    }
    return true
}