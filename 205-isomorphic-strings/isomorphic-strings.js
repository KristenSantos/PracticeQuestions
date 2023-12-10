/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false
  const arrS = [];
  const arrT = [];

  for(let i = 0; i < s.length; i++){
    arrS.push(s.indexOf(s[i]))
    arrT.push(t.indexOf(t[i]))
    if(arrT[i] !== arrS[i]) return false

  }
  return true
};






// var isIsomorphic = function(s, t) {
//     const obj = {};
//     const obj2 = {}
//     let arr1 = '';
//     let arr2 = '';
//     for(let i = 0; i < s.length; i++){
//         if(s[i] in obj){
//             obj[s[i]] += i
//         } else{
//             obj[s[i]] = i
//         }
//     }

//     for(let i = 0; i < t.length; i++){
//         if(t[i] in obj2){
//             obj2[t[i]] += i
//         } else{
//             obj2[t[i]] = i
//         }
//     }
//     console.log(obj)
//     console.log(obj2)
//     for(let nums in obj){
//       arr1 += obj[nums]
//     }    
//     for(let nums in obj2){
//       arr2 += obj2[nums]
//     }


//     console.log(arr1)
//     console.log(arr2)

//     return arr1 === arr2
// };