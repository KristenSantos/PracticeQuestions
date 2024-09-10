/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const largest = Math.max(word1.length, word2.length)
    let mergedString = ""
    for(let i = 0; i < largest; i++){
        if(word1[i]){
            mergedString += word1[i]
        } 
        if(word2[i]){
             mergedString += word2[i]
        }
    }
    return mergedString
};