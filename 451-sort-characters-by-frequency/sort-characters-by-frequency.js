/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const obj = {};
    let newStr = ''
    for(const letter of s){
        if(!obj[letter]){
            obj[letter] = letter
        } else {
            obj[letter] += letter
        }
    }
    let arr = Object.values(obj);
    console.log(arr)
    arr.sort((a,b) => a.length - b.length)

   for(let i = arr.length-1; i >= 0; i--){
       newStr += arr[i]
   }
   return newStr
};