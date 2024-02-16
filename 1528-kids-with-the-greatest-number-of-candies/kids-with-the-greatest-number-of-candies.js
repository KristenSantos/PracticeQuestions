/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const booleanArray = [];
    let maxCandy = Math.max(...candies)
    for(let i = 0; i < candies.length; i++){

        if((candies[i]+extraCandies) >= maxCandy){
            booleanArray.push(true);
            // maxCandy = (candies[i]+extraCandies)
        } else {
            booleanArray.push(false)
        }
    }
    return booleanArray
};