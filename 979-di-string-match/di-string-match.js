/**
 * @param {string} s
 * @return {number[]}
 */
 /*
 P:
 E:
 D:
 A:
 C:
 */
var diStringMatch = function(s) {
    let perm = [];
     let incCount = 0;
     let decCount = s.length;
     for(let i = 0; i < s.length; i++){
         if(s[i] === "I"){
             perm.push(incCount)
             incCount++
         } else {
             perm.push(decCount)
             decCount--
         }
     }
     perm.push(incCount)
     return perm
};