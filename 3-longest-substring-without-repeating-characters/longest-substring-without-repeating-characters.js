/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    if(str.length === 0){
        return 0
    }
    let longestSub = 0
    let pointer1 = 0
    let pointer2 = 0
    let subSet = new Set()
    while( pointer2 < str.length) {

        if(!subSet.has(str[pointer2])){
            subSet.add(str[pointer2]);
            pointer2++
            longestSub = Math.max(longestSub, pointer2 - pointer1)
            
        } else{
            subSet.delete(str[pointer1])
            pointer1++

        }

    }
    return longestSub
};