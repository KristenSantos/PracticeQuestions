/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString = '';
    let len = word1.length > word2.length ? word1.length : word2.length
        for(let i = 0; i < len; i++){
            if(word1[i] === undefined){
                 mergedString += word2[i]
            } else if(word2[i] === undefined) {
                 mergedString += word1[i]
            } else {
                mergedString += word1[i];
                mergedString += word2[i];
            }

        }
        return mergedString
};