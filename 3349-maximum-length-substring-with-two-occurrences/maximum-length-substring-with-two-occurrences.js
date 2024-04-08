/**
 * @param {string} s
 * @return {number}
 */
/*
s = "aacbabeaf"
output = 'acbabeaf'

*/

var maximumLengthSubstring = function(s) {
    let letterMap = new Map();
    let subStringLength = 0;
    let left = 0;
    let right = 0;  
    while(right !== s.length){
        if(!letterMap.has(s[right])){
            letterMap.set(s[right], 1)
            
        } else if(letterMap.get(s[right]) === 2){
            if(subStringLength < right-left) {
                subStringLength = right-left;
            }
            while(left < right){
                if(s[left] == s[right]){
                    left++;
                    break;
                }
                letterMap.set(s[left],letterMap.get(s[left])-1);
                left++;
            }
        }
            else if(letterMap.get(s[right]) < 2){
                letterMap.set(s[right],letterMap.get(s[right])+1)
            }
            right++;
    }
    if(subStringLength < right - left) subStringLength = right - left;
    
    return subStringLength;
  
};