/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let currentSIndex = 0;
    let currentTIndex = 0;
   
        while(currentTIndex <= t.length-1){
           
            if(s[currentSIndex] === t[currentTIndex]){
                console.log(`${s[currentSIndex]} === ${t[currentTIndex]}`)
                currentSIndex += 1
                currentTIndex++
            } else {
                currentTIndex++
            }
        }
        if(currentSIndex === s.length){
            return true
        } else return false
};