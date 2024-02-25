/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const occuranceArray = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            occuranceArray.push(i)
        }
    }
    return occuranceArray
};