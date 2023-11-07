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
//     if(trustCheck){
//         return trustNum
//     } else {
//         return -1
//     }
// };

const findJudge = (n, trust) => {
    const trustScores = new Array(n + 1).fill(0)

    for(const [a, b] of trust){
        trustScores[a]--
        trustScores[b]++
    }
    for(let i = 1; i < trustScores.length; i++){
        if(trustScores[i] === n - 1){
            return i 
        } 
    }
    return -1   
};