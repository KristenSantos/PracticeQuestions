/**
 * @param {string[]} bank
 * @return {number}
 */


var numberOfBeams = function(bank) {
    let beams = 0;
     let pervSecurityDevices = 0;
     let currSecurityDevices = 0; 
     for(let i = 0; i < bank.length; i++){
        for(let j = 0; j < bank[i].length; j++){
                if(Number(bank[i][j]) == 1){
                currSecurityDevices++
            } 

            
        }
        if(currSecurityDevices !== 0){
            beams += currSecurityDevices * pervSecurityDevices;
            pervSecurityDevices = currSecurityDevices;
            currSecurityDevices = 0 
        }
     } 
     return beams
};