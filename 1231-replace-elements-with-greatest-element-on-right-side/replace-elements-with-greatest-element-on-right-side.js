/**
 * @param {number[]} arr
 * @return {number[]}
 */
 /*
 */

/*
P: repace every element with the greatest element to the right of that element

E: input: arr = [8,9,2,9,1,2,5,6]
output: [9, 9, 9, 6, 6, 6, 6, -1]
D:
A:
C:
*/
 
var replaceElements = function(arr) {
    let max = arr[arr.length-1]
    arr[arr.length - 1] = -1

    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] < max){
            arr[i] = max
            
        } else {
            const hold = max
            max = arr[i]
            arr[i] = hold
        }

    }
    return arr
};

























    // let max = arr[arr.length - 1];
    // arr[arr.length-1] = -1;
    // for(let i = arr.length-2; i >= 0; i--){
    //     if(max > arr[i]){
    //         arr[i] = max
    //     }
    //     else {
    //         const hold = max;
    //         max = arr[i]
    //         arr[i] = hold
    //     }
    // }
    // return arr