/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let results  = [];

    for(let letter of words[0]){
        if(words.every((word) => word.includes(letter))) {
            results.push(letter)
            words = words.map((word) => word.replace(letter, ""))
        }
    }
    return results
};