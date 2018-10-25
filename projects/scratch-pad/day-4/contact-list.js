// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
var newObj = {};
newObj.id = id;
newObj.nameFirst = nameFirst;
newObj.nameLast = nameLast;
return newObj;
} 

//new object
//length(): number of contacts in list
//findContact(fullName): return if both first and last name match
//removeContact

function makeContactList() {
    let contactList = [];
    var contacts;
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contactList.length;
        },
        addContact: function(contact) {
            return contactList.push(contact);
        },
        findContact: function(fullName) {
           for (var i = 0; i < contactList.length; i++) {
               if (fullName === contactList[i].nameFirst + ' ' + contactList[i].nameLast) {
                   return contactList[i];
               }
           }
},
        removeContact: function(contact) {
            for (var i = 0; i < contactList.length; i++) {
                if (contactList[i] === contact) {
     return contactList.splice(i, 1);
 }            
}
},
        printAllContactNames: function() {
            let names = [];
            for (let i = 0; i < contactList.length; i++) {
               names.push(contactList[i].nameFirst + ' ' + contactList[i].nameLast);
            } return names.join('\n');
        }
        };
        
        }
    





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
