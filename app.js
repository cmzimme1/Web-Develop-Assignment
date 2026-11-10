const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");
const themeToggleButton = document.getElementById("theme-toggle");
const statusDisplay = document.getElementById("status-text");

const priorityLabels = {
    low: "Low",
    medium: "Medium",
    high: "High"
};

function createTaskElement(taskName, priority) {
    const listItem = document.createElement("li");

    listItem.classList.add("task-item", "priority-" + priority);

    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("badge");
    priorityBadge.textContent = priorityLabels[priority];

    listItem.appendChild(taskText);
    listItem.appendChild(priorityBadge);

    return listItem;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const taskName = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value;

    errorDisplay.textContent = "";

    if (taskName === "") {
        errorDisplay.textContent = "Please enter a task name before adding it.";
        taskNameInput.focus();
        return;
    }

    const newTaskElement = createTaskElement(taskName, priority);

    taskListContainer.appendChild(newTaskElement);

    taskForm.reset();
    taskNameInput.focus();

    const taskCount = taskListContainer.children.length;
    statusDisplay.textContent = "Status: You have " + taskCount +
        (taskCount === 1 ? " task." : " tasks.");
}

taskForm.addEventListener("submit", handleFormSubmit);

function toggleDarkTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    themeToggleButton.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
}

themeToggleButton.addEventListener("click", toggleDarkTheme);
