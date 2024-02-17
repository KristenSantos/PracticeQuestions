/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newString = '';
    s = s.split(" ")
    for(let i = s.length-1; i >= 0; i--){
        if(s[i] !== ''){
         newString += ` ${s[i]}`
        }  
    }
    return newString.trim()
};