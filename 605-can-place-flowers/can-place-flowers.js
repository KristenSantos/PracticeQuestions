/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/*
P: Given an array of 0 and 1 and a number return true or false based on if the number give amount of flowers can be planted. Flowers cannot be adjacent to each other
E:  flowerbed  = [0,1,0,0,0,0,0,1,0,1,0,1,0,0,1] n = 3
                        1   1                    1
                        false 
D:

A:

C:
*/

var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i = 0; i <= flowerbed.length; i++){
        if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){
            flowerbed[i] = 1
            n--
        }
    }
    console.log(n)
    console.log(flowerbed)
    return n <= 0
        
};






    // let i = 0;

    // while(i < flowerbed.length && n !== 0){
    //     if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1){
    //         n--
    //         i++
    //     }
    //     i++
    // }
    // return n === 0