/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i]-buy > maxProfit){
            maxProfit = prices[i]-buy
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