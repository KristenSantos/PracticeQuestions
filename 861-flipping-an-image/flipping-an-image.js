/**
 * @param {number[][]} image
 * @return {number[][]}
 */

 /*
 P:
 E:
 D:
 A:
 C:
 */
var flipAndInvertImage = function(image) {
    for(let row = 0; row < image.length; row++){
        image[row].reverse();
        for(col = 0; col < image[row].length; col++){
            if(image[row][col] === 0 ){
                image[row][col] = 1
            } else {
                image[row][col] = 0;
            }
        }
    }
    return image
};