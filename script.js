const input = document.getElementById('todo-input');
const add = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

function savetodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createtodos(todo, index) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        if (todo.completed) {
            textSpan.style.textDecoration = 'line-through';
        } else {
            textSpan.style.textDecoration = 'none';
        }

        savetodos();
    });

    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.margin = '0 8px';

    if (todo.completed) {
        textSpan.style.textDecoration = 'line-through';
    }

   textSpan.addEventListener("dblclick", () => {
     const newText = prompt("Edit todos", todo.text); 
     if (newText !== null && newText.trim() !== '') 
    { 
        todo.text = newText.trim();
         textSpan.textContent = todo.text; 
         savetodos(); 
        } 
    });

    const btn = document.createElement("button");
    btn.textContent = "Delete Todo";

    btn.addEventListener("click", () => {
        todos.splice(index, 1);
        savetodos();
        render();
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(btn);

    return li;
}

function render() {
    list.innerHTML = '';

    todos.forEach((todo, index) => {
        const node = createtodos(todo, index);
        list.appendChild(node);
    });
}

function addtodos() {
    const text = input.value.trim();

    if (!text) {
        return;
    }

    todos.push({
        text: text,
        completed: false
    });

    input.value = '';

    render();
    savetodos();
}

add.addEventListener("click", addtodos);

render();

