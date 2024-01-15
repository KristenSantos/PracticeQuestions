/**
 * @param {string} s
 * @return {number}
 */
 /*
 P: Givenn a roman numeral, return a number.
 E: input: IV output: 4
 input: MDCCLXVI output: 1766
 D: numbers 
 A:
 initalize a new variable with the value of zero.
 create an object that holds all the roman numeral and its values.
 Itterate through the string that is a roman numeral
 
 C:
  */
var romanToInt = function(s) {
    let finalNum = 0;
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for(let i = 0; i < s.length; i++){
        if(romanMap[s[i]] < romanMap[s[i+1]]){
            finalNum -= romanMap[s[i]]
        } else {
             finalNum += romanMap[s[i]]
        }
    }
    return finalNum
};