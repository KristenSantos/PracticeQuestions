/**
 * @param {number[]} arr
 * @return {boolean}
 */
 /*
 P:
 E:
 D:
 A:
 C:
 */
var uniqueOccurrences = function(arr) {
    let occurenceMap = new Map();
    let reoccurenceSet = new Set()
    for(let num of arr){
        if(occurenceMap.has(num)){
            occurenceMap.set(num, occurenceMap.get(num)+1)
        } else{
            occurenceMap.set(num, 1)
        }
    }
    for (let values of occurenceMap.values()) {
    if(!reoccurenceSet.has(values)){
        reoccurenceSet.add(values)
    } else {
        return false
    }
};

    return true
};