/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomMap = {};
    for(const letter of magazine){
        if(letter in ransomMap){
            ransomMap[letter]++
        } else {
            ransomMap[letter] = 1
        }
    }
    for(const letter of ransomNote){
        if(ransomMap[letter] === 0 || !ransomMap[letter]){
            return false
        } 
        ransomMap[letter]--
    }
    return true
};