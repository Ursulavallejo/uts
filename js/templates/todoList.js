function updateToDos(todo) {
    let apperanceClass = ''
          if (todo.done === true){
              apperanceClass = 'done'
    }
    return `

            <li id="todo-${ todo.id }" class="${apperanceClass}">
                ${ todo.text}
                <input type="checkbox" id="done-${ todo.id }" checked="${ todo.done }">
                <button id="delete-${ todo.id }">X</button>
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
