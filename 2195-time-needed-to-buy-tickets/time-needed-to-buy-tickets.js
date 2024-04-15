/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

/*
create a varible that counts the time that it takes for the person in the k position to buy
all needed tickets
next iterate through the array evertime decrease value of each element; 
check the value of each elemnnt if  0 than dont add that to the variable time
else do
last if element k if equal to zero return the. 
Other element in line dont have tp br equal to zero to return variable
*/
var timeRequiredToBuy = function(tickets, k) {
    let timeTaken = 0;
    let current = 0; 
    console.log(tickets[k])
    while (tickets[k] > 0){
        if(tickets[current] > 0){
            tickets[current]--;
            timeTaken++;
            current++
        } else if(tickets[current] === 0 )(
            current++
        )
        if(current > tickets.length-1){
            current = 0;
        }
    }
    return timeTaken
    
};