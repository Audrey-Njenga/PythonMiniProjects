class ToDo {
    constructor(title, status, id) {
        this.title = title;
        this.status = status;
        this.id = id;
    }
}


let toDos = [];
function AddToDo(text) {
    let todo = new ToDo(text, false, Date.now());
    toDos.push(todo);
    renderToDo(todo);
    console.log(toDos);
}


function renderToDo(todo){
    const list = document.querySelector(".list");
    const node = document.createElement("li");
    node.setAttribute("class", "incomplete");
    node.innerHTML = `<p>${todo.title}</p>`
    list.append(node);
}


const form = document.getElementById('todoform');
form.addEventListener('submit', event => {
    // prevent page from refreshing when submit button is clicked
    event.preventDefault();
    const input = document.getElementById("textInput").value;
    const text = input.trim();
    if (text != "") {
        AddToDo(text);
        input = "";
        input.focus();
    }
})


