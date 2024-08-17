/**
 * @param {number[]} arr
 * @return {number[]}
 */
 /*
 */

/*
P: Given an array of numbers replace every number in the array with the 
greatest number to it's right. Last number replace with -1
E:
arr = [8,4,6,8,1,5,6]
return: [8,6,8,8,5,6,-1]
D:
A:
C:
*/
 
var replaceElements = function(arr) {
    let currHighest = arr[arr.length-1];   
    for(let i = arr.length-1; i >= 0; i--){

        let currElement = arr[i]
        arr[i] = currHighest 

        if(currElement > currHighest)currHighest = currElement
        
    }
     arr[arr.length-1] = -1
    console.log(arr)
    return arr
};
