function updateListInfo(contact){
    return `
    <li id="contact-${contact.id}">
        ${ contact.name}   ${ contact.number}
        <button id="edit-1" onclick="contactEditable()">Edit</button>
        <button id="delete-${contact.id}" onclick="deleteContact (${ contact.id })">X</button>
    </li>
    `
}

function updateContactList(contactArray){
 let ListContact = '<ul>';
    for (const item of contactArray){
        ListContact += updateListInfo(item)
    }
    ListContact += '<ul>'
    updateElementIdHtml('contactsListHtml', ListContact)
}


function updateElementIdHtml(elementID, htmlString){
    document.getElementById(elementID).innerHTML = htmlString
}



function contactEditable(contact){
    return  `
    <li id="contact-${contact.id}">
        <input type="text" id="nameInput" value="${ contact.name}" />
        <input type="text" id="numberInput" value="${ contact.number}" />
        <button id="edit-2" onclick=" updateContactList(contactArray)">Save</button>
    </li>
     `
}

updateContactList(contactArray)