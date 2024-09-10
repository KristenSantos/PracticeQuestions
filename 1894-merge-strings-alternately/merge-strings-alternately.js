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










    // let mergedString = ''
    // while(mergedString.length < word1.length + word2.length){
    //     let larger 
    //     if(word1.length > word2.length){
    //          larger = word1
    //     } else {
    //         larger = word2
    //     }
    //     for(let i = 0; i < larger.length; i++){
    //         mergedString += word1[i]
    //         mergedString += word2[i]
    //         word1.replace(word1[i], '')
    //         word1.replace(word2[i], '')
    //         if(larger === word1){
                
    //         }
        
    //     }
    // }
    // console.log(mergedString)