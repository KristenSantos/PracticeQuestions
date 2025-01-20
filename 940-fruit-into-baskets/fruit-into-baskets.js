/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let s = 0;
    let e = 0; 
    let max = 0;
    let fruitBasket = {};
    while(e < fruits.length){
        let currEle = fruits[e];
        fruitBasket[currEle] = (fruitBasket[currEle] || 0) + 1; 

        while(Object.keys(fruitBasket).length > 2){
            let startFruits = fruits[s];
            fruitBasket[startFruits]--;
            if(fruitBasket[startFruits] === 0){
                delete fruitBasket[startFruits]
            }
            s++
        }
        max = Math.max(max, e-s+1);
        e++ 
        }
    return max
    }


    // for (let e = 0; e < fruits.length; e++){
    //     let currEle = fruits[e]   
    //     fruitBasket[currEle] = (fruitBasket[currEle] || 0) + 1

    //     while (Object.keys(fruitBasket).length > 2){
    //         let char = fruits[s];

    //         if (fruitBasket[char] === 0){
    //             delete char
    //         } else {
    //             fruitBasket[char]--;
    //         }
    //         s++;

    //     }
    //     max = Math.max(max, e-s+1)

    // }