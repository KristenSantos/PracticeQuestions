
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    let s = 0;
    let e = height.length-1;
    while(s <= e){
        let currMin = height[s] < height[e] ? height[s] : height[e];
        let currWidth = e-s;
        let currArea = currMin * currWidth;
        max = Math.max(max, currArea)
        if(height[s] < height[e]){
            s++;
        } else {
            e--;
        }
    }
    return max
}



// Nested for loop but still works when not given a big number
// var maxArea = function(height) {
//     let max = 0; 
//     for(let i = 0; i < height.length; i++){
//         let currentHeight = height[i]
//         for(let j = 0; j <  height.length; j++){
//             let minHeight = currentHeight < height[j] ? currentHeight : height[j]
//             let width = j - i;
//             max = Math.max(max, minHeight * width)
//         }
//     }
//     return max
// };