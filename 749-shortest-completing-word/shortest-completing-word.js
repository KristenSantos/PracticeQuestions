/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

 /*
 P: A compleing word is a word that contains all the letters in licensePlate. Ignore numbers, spaces and all letters are case insensitive, 
 E:
 D:
 A:
 C:
 */
// var shortestCompletingWord = function(licensePlate, words) {
//     let map = {};
//     licensePlate = licensePlate.toLowerCase()
//     for(let i = 0; i < licensePlate.length; i++){
//         if(licensePlate[i].match(/[a-z]/i) && licensePlate[i] in map){
//             map[licensePlate[i]]++
//         } else if(licensePlate[i].match(/[a-z]/i) && !map[licensePlate[i]]){
//             map[licensePlate[i]] = 1
//         }
//     }

//     console.log(map)

// };
const shortestCompletingWord = (licensePlate, words) => {
    let fixLicence = licensePlate.toLowerCase().replace(/[\d\s]/g,'');
    console.log(fixLicence)
    let sortWords = [...words].sort((a,b) => a.length-b.length);
    console.log(sortWords)
    for(let word of sortWords) {
        let copyLicence = fixLicence;

        for(let i = 0; i < word.length; i++){
            copyLicence = copyLicence.replace(word[i],'');
            if(!copyLicence) return word
        }

    }
 
}