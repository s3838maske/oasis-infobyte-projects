// Function to add a new todo
function addTodo() {
    var newTodo = document.getElementById("newTodo").value;

    if (newTodo !== "") {
        var todoList = document.getElementById("todoList");
        var li = document.createElement("li");
        li.textContent = newTodo;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            todoList.removeChild(li);
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        // Clear the input field
        document.getElementById("newTodo").value = "";
    }
}
