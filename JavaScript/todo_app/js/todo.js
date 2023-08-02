//To Do App

// function gets task from input
function get_todos() {
    //creates array of input tasks
    var todos = new Array;
    //pulls task saved in browser memory
    var todos_str = localStorage.getItem('todo');
    //if input !null, JSON will communicate with browser creating JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// function adds inputed task to get_todos funtion array
function add() {
    //takes input task and creates variable
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //Adds new task to end of array
    todos.push(task);
    // this converts task input into a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//function keeps tasks permanetly displayed on screen
function show() {
    //sets the task retrieved as a variable
    var todos = get_todos();

    //sets up each task as ul
    var html = '<ul>';
    //displays a task to list in order input
    for (var i = 0; i < todos.length; i++) {
        //also displays task as list and creates button with "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>'
    //This displays task as list
    document.getElementById('todos').innerHTML = html;
    //update display after removal
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) { //loops through buttons
        buttons[i].addEventListener('click',remove);
    };
}


function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // looks in show how to display a removed item
    show()
}

function dblClick() {
    document.getElementById("double").innerHTML = 'Works';
}