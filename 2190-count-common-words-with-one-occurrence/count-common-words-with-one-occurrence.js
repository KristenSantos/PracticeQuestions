/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
/*
 P:
 E:
 D:
 A:
 C:
*/
var countWords = function(words1, words2) {
    let words1Map = {};
    let words2Map = {};
    let totalCount = 0; 
    for(let word of words1){
        words1Map[word] = words1Map[word] ? words1Map[word] + 1 : 1
    }
    for(let word of words2){
        words2Map[word] = words2Map[word] ? words2Map[word] + 1 : 1
    }
    for(word in words1Map){
        if(words1Map[word] === 1 && words2Map[word] === 1){
            totalCount++
        }
    }
    return totalCount
};
