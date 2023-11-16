/**
 * @param {string} text
 * @return {number}
 */
 /*
 P: Given a string that contains letters find how many times the world balloon can be made but each letter can only be used once

 E: text: 'gdblondalon' output:1
 
 D: Maps

 A:

 C:
 */
var maxNumberOfBalloons = function(text) {

    let ballonMap = {
        b:0,
        a:0,
        l:0,
        o:0,
        n:0,
    }

    for(const letter of text){
        ballonMap[letter]++;
    }
    return Math.floor(
        Math.min(ballonMap.b, ballonMap.a, ballonMap.l/2, ballonMap.o/2, ballonMap.n)
    );
};