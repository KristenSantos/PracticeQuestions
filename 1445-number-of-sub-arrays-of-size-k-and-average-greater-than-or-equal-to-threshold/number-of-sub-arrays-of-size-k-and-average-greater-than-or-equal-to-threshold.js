/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */


 
var numOfSubarrays = function(arr, k, threshold) {
    let maxSub = 0; 
    let start = 0;
    let currentSum = 0;
    for(let end = 0; end < arr.length; end++){
        
        currentSum += arr[end];

        while(end-start+1 >= k){
            let average = currentSum/k;

            if(average >= threshold){
                console.log(true)
                maxSub++
            } 
            currentSum -= arr[start];
            start++
        }

    }

    return maxSub
    
};