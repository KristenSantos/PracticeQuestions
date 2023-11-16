/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
      // create variable array and obj
  let res = [];
  let obj = {};
  
  // iterate through the array
  // set the value key and weight the value
  for(let i = 0; i < items1.length; i++){
    const val = items1[i][0];
    const weight = items1[i][1];
    if(!obj[val]){
      obj[val] = weight
    } 
  }
  for(let i = 0; i < items2.length; i++){
    const val = items2[i][0];
    const weight = items2[i][1];
    if(!obj[val]){
      obj[val] = weight
    } else {
      obj[val] += weight
    }
  }

  

  // iterate throught the object and push the key value pair as an array into the object
  for(const key in obj){
      res.push([Number(key), obj[key]])
  }


  //sort the array 

  // return that array
  return res
};