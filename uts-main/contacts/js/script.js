function addContact(){
    let userName =  document.getElementById('nameInput').value
    let userNumber  =  document.getElementById('numberInput').value
    let contact = {
        id:contactArray.length + 1,
        name: userName,
        number: userNumber,
    }
    contactArray.push(contact)
    updateContactList(contactArray)
}

function addContactEdit(){
    let userNameEdit =  document.getElementById('nameInput2').value
    let userNumberEdit  =  document.getElementById('numberInput2').value
    let contact = {
        id:contactArray.length + 1,
        name: userNameEdit,
        number: userNumberEdit,
    }
    contactArray.push(contact)
    updateContactList(contactArray)
}

function deleteContact(id){
    for (let i = 0; i < contactArray.length; i++) {
        if (contactArray[i].id === id){
            contactArray.splice(i, 1);
        }
    }
    updateContactList(contactArray)
}