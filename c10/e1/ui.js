export function renderTasks(tasks, container, onToggle) {
    container.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;

        if(task.completed) {
            // li.classList.add("completed");
            li.style.textDecoration = "line-through";
            li.style.opacity = 0.2;
        }

        li.addEventListener("click", () => {
            onToggle(task.id);
            // li.classList.toggle("completed");
        });

        container.appendChild(li);
    });
}