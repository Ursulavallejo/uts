function updateToDos(todo) {
    let apperanceClass = ''
    let checkedHtml = ''
          if (todo.done === true){
              apperanceClass = 'done'
              checkedHtml = 'checked'
    }
    return `

            <li id="todo-${ todo.id }" class="${apperanceClass}">
                ${ todo.text}
                <input type="checkbox" id="done-${ todo.id }" ${ checkedHtml } onclick="checkToDo(${ todo.id })">
                <button id="delete-${ todo.id } " onclick="deleteToDo (${ todo.id })">X</button>
            </li>
            
`
}


function updateToDoList(todoArray) {
// updates dropdown when array changes
    let listText = '<ul>';
    for (const item of todoArray){
        listText += updateToDos(item)
    }
    listText  += '</ul>'
    updateElementIdHtml('toDoListHtml', listText)
}

function updateElementIdHtml(elementID, htmlString){
    document.getElementById(elementID).innerHTML = htmlString
}

updateToDoList(todoArray)
