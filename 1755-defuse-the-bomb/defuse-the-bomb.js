/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */

function greaterThanHelper(arr, k){
    let sum = 0;
    let arr1 = []
    for(let i = 0; i < k; i++) sum += arr[i];

    for(let i = 0; i < arr.length; i++){
        sum -= arr[i];
        sum += arr[(i+k) % arr.length];
        arr1.push(sum)
        
    }
    return arr1
}

var decrypt = function(code, k) {
    if(k === 0){
        code.fill(0)
        return code
    }
        if (k < 0){
            return greaterThanHelper(code.reverse(), -k).reverse()
        }

       return greaterThanHelper(code, k)

        // console.log(code[i + k % code.length])

   

};

//arr[i % arr.length]
//4 loa
//
////[5,7,1,4] 
