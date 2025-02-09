function updateContainerVisibility() {
    const taskContainer = document.querySelector(".container");
    const taskList = document.getElementById("taskList");

    if (taskList.children.length === 0) {
        taskContainer.style.display = "none";
    } else {
        taskContainer.style.display = "block";
    }
}

document.getElementById("addTaskButton").addEventListener("click", function () {
    addTask();
    updateContainerVisibility();
});

document.getElementById("taskList").addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
        const listItem = event.target.closest("li"); 
        listItem.querySelector("span").classList.toggle("completed", event.target.checked); 
    }
});


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${taskInput.value}</span>
        <button class="delete-btn">✖</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    updateContainerVisibility();

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        updateContainerVisibility(); 
    });
}

document.addEventListener("DOMContentLoaded", updateContainerVisibility);
