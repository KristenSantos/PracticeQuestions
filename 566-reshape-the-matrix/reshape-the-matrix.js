/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 /*
 P: Given a matrix rearange the matrix to have the same number of rows and
 columns of the wanted reshaped matrix.
 If reshaping the matix to follw the rows and columns isn't possible return
 the original matrix

 E: mat = [[2,5,6,2],[1,7,3,4],[9,2,6,4],[0,9,1,5]] r = 3, c = 6
This doesn't work
return = [
[2,5,6],
[2,1,7],
[3,4,9],
[2,6,4],
[0,9,1],
[5]
]
 D: Array matix
 A: Start by initalizing an array that loops through each row of the matrix, 
 Create a for loop that iterates through the rows of the of the matrix, 
 Create another for loop that iterates through each nested array

 C:
 */
var matrixReshape = function(mat, r, c) {
    let originalRow = mat.length;
    let originalColumn = mat[0].length;

    if(originalRow * originalColumn !== r * c) {
        return mat
    }

    const reshaped = [];

    for(let i = 0; i < r; i++){
        reshaped[i] = [];
        for(let j = 0; j < c; j++){
            let originalIndex = i*c+j;
            let oriRow = Math.floor(originalIndex/originalColumn);
            let oriColumn = originalIndex % originalColumn;
            reshaped[i][j] = mat[oriRow][oriColumn]
        }
    }
    return reshaped
};