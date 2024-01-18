/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

 /*

 P: Given and array of words and a string, Find the numbers of good strings a good string must use each letter in the given string only once. Then return the length of all good string

 E: words = ['jam', 'vib', 'cash', 'bat', 'bant'] chars = 'vibrant'
 output: 10
 words = ["noppe", "now", "yellow", "peoni"] chars = 'nope'
 output: 0 

 D: string and numbers, array

 A:
 Declare a variable that will hold our good word count
 Create a hashmap that will hold the values of how many of each letter there are
 Iterate through the words array
 create a counter that will count the number of letters in each word
    Iterate through each word check if its in the hash map
        if letters in the hashmap than decrease the value in the hashmap
        remove the letter from the string
        lastly once completely done checking for each letter check the length   of that string if string length is equal to zero then add the counter to goodword count 
Return good word count

 C:
 */

// var mapMaker = function(chars){
    // const letterMap = {}
    // for(const char of chars){
    //     if(char in letterMap){
    //         letterMap[char]++
    //     } else {
    //         letterMap[char] = 1
    //     }
    // }
    
//     console.log(letterMap)
//     return letterMap
// }

var countCharacters = function(words, chars) {
    let goodWordCount = 0;

    for (let word of words) {
        const letterMap = {}; // Reset letterMap for each word
        let isGoodWord = true;

        for (const char of chars) {
            if (char in letterMap) {
                letterMap[char]++;
            } else {
                letterMap[char] = 1;
            }
        }

        for (const char of word) {
            if (char in letterMap && letterMap[char] > 0) {
                letterMap[char]--;
            } else {
                isGoodWord = false;
                break;
            }
        }

        if (isGoodWord) {
            goodWordCount += word.length;
        }
    }

    return goodWordCount;
};