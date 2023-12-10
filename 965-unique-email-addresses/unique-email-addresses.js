/**
 * @param {string[]} emails
 * @return {number}
 */
 /*
 1. Create empty set
 2. Loop through emails
    a. Create Variable Local and Domain from split at "a"
    b. Delete "." from local 
    c. Split local from "+"
    d. Create unique email variable to hold local + "a" + domain
    e. add unique email to set
3. Return the size of the set
 */
var numUniqueEmails = function(emails) {
    const emailSet = new Set();
    for(let i = 0; i < emails.length; i++){
        let [local, domain] = emails[i].split('@')
        local = local.replaceAll('.', "")
        local = local.split('+')
        let newDomain = local[0] + '@' + domain
        emailSet.add(newDomain)
    }
    return emailSet.size
};