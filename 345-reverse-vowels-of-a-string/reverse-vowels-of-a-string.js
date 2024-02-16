/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const regex = /[aeiouAEIOU]/
    let reversed = s.split('').filter(ele => ele.match(regex)).reverse()
    let index = 0
    let string = ''

    for (let i=0; i<s.length; i++){
        if (s[i].match(regex)){
            string += reversed[index]
            index++
        } else {
            string += s[i]
        }
    }
    console.log(string)
    return string
};


