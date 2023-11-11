/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function(n, trust) {
//     let trustNum = trust[0][1]; 
//     let trustCheck = true;
//     if(trust.length === 1){
//         return trust[0][1]
//     }
//     for(let i = 0; i < trust.length; i++){
//         if(trust[i][1] !== trustNum){
//             trustCheck = false;
//         }
//     } 
//     if(trustCheck) return trustNum
        
//     return -1

// };
/*
Input: n = 3, trust = [[1,3],[2,3]]
trustScores = [0,-1,-1,2]

*/

const findJudge = (n, trust) => {
let trustArray = new Array(n+1).fill(0);
for(const [a,b] of trust){
    trustArray[a]--
    trustArray[b]++;
}

    return trustArray.lastIndexOf(n-1)

};