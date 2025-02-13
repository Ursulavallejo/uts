function updateListInfo(contact) {
    return `
    <li id="contact-${contact.id}">
        ${contact.name}   ${contact.number}
        <button id="edit-1" onclick="contactEditableWrite(${contact.id})">Edit</button>
        <button id="delete-${contact.id}" onclick="deleteContact (${contact.id})">X</button>
    </li>
    `
}

function updateContactList(contactArray) {
    let ListContact = '<ul>';
    for (const item of contactArray) {
        ListContact += updateListInfo(item)
    }
    ListContact += '<ul>'
    updateElementIdHtml('contactsListHtml', ListContact)
}


function updateElementIdHtml(elementID, htmlString) {
    document.getElementById(elementID).innerHTML = htmlString
}


function ItemContactEditable(id) {

    let nameEdited= document.getElementById('nameInput2' + id).value
    let numberEdited =  document.getElementById('numberInput2' + id).value
    for (const item of contactArray) {
      if (item.id === id){
          item.name = nameEdited
          item.number = numberEdited
      }
    }
    updateContactList(contactArray)
}

function contactEditable(contact){
    return `
        <input type="text" id="nameInput2${contact.id}" value="${contact.name}" />
        <input type="text" id="numberInput2${contact.id}" value="${contact.number}" />
        <button id="edit-2" onclick=" ItemContactEditable(${contact.id})">Save</button>
     `
}

function contactEditableWrite(id){
    let contactHtml = ''
    for (const item of contactArray){
        if (item.id === id){
            contactHtml = contactEditable(item)
        }
    }
    updateElementIdHtml('contact-'+ id, contactHtml)
}

updateContactList(contactArray)