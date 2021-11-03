function addToDo(){
    let userText = document.getElementById('todoInput').value
    let todo = {
        id: todoArray.length + 1,
        text:userText,
        done: false,
    }
    todoArray.push(todo)
    updateToDoList(todoArray)
}


function checkToDo (id){
    let textChecked = document.getElementById('done-'+ id).checked
    for (const item of todoArray) {
       if (item.id === id){
           item.done = textChecked
       }
    }
    updateToDoList(todoArray)
}

function deleteToDo (id){
    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].id === id){
            todoArray.splice(i, 1);
        }
    }
    updateToDoList(todoArray)
}

