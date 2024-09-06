/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 

/*
P: Given an array of numbers and a target value return the indices of the 2 
that equal the target value

E:
nums = [7,2,6,8,9], target = 11
Output: [1,1]
D:
Hashmap stores the indice as the key and the value as the value

A:
Create the Hash map; 
Loop through the nums arr
Insert the values in the hashmap and check if any of the current 
values in the hashmap add plus the current value add up to the target 
if they do return those values contiune
C:
*/

var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++){
        let tracker = target - nums[i]
        if(tracker in map){
            console.log(map[tracker])
            return [map[tracker],i]
        } else {

            map[nums[i]] = i
        }


    }

}
