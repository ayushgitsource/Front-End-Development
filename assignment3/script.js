let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.onclick = function () {
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function () {
        let newTask = prompt("Edit task:", li.firstChild.textContent);
        if (newTask !== null) {
            li.firstChild.textContent = newTask;
        }
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = function () {
        list.removeChild(li);
    };

    li.append(" ", editBtn, " ", delBtn);
    list.appendChild(li);

    input.value = "";
};
