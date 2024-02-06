/**
 * @param {number[]} prices
 * @return {number}
 */

/*
[7,1,5,3,6,4]
1 -7 = -6
5 - 1 = 4;
3 - 1 = 2;
6 - 1 = 5;
4 - 1 = 3; 
*/
/*
buy = 7
[7,6,4,3,1]

*/
var maxProfit = function(prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - buy > maxProfit){
            maxProfit = prices[i] - buy;
        }
        if(prices[i] < buy){
            buy = prices[i]
        }
    }
    return maxProfit
};






















//   let right = 1; 
//     let left = 0
//     let maximumProfit = 0; 

//     while(right < prices.length){
        
//         if(prices[left] < prices[right]){
//             let current = prices[right] - prices[left]
//             maximumProfit = Math.max(maximumProfit, current)
//         } else {
//             left = right
//         }
//         right++
//     }
//     return maximumProfit