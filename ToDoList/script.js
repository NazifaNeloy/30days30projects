document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const addTask = () => {
        const text = todoInput.value.trim();
        if (text === "") return;

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="check-circle"></div>
            <span>${text}</span>
        `;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            li.style.opacity = '0';
            setTimeout(() => li.remove(), 300);
        });

        todoList.appendChild(li);
        todoInput.value = "";
    };

    addBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});