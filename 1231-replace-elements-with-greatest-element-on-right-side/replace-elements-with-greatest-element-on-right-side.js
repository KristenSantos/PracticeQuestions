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
    let max = arr[arr.length-1];
    arr[arr.length-1] = -1;
    for(let i = arr.length-2; i >= 0; i--){
        let current = arr[i];
        arr[i] = max
        if(current > max){
            max = current
        }
    }
  console.log(arr)
  return arr
}



