console.log("Hello");

const todos = [];

// { title: string, completed: boolean }

function addTodo() {
  // Select the input element
  const inputTodoElement = document.querySelector("#inputTodo");

  // Select it's value aka the title
  const title = inputTodoElement.value;

  todos.push({ title, completed: false });

  renderTodos();

  console.log(todos);
}

// deleteTodo
function deleteTodo(index) {
  todos.splice(index, 1);

  renderTodos();
}

// toggleTodo
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;

  renderTodos();
}

function renderTodos() {
  const todoListElement = document.querySelector("#todoList");

  todoListElement.innerHTML = "";

  todos.forEach((todo, index) => {
    const listElement = document.createElement("li");
    listElement.innerHTML = `
        <p>${todo.title}</p>
        <p>${todo.completed ? "Completed" : "Pending"}</p>
        <button type="button" onclick="toggleTodo(${index})">Toggle</button>
        <button type="button" onclick="deleteTodo(${index})">Delete</button>
    `;

    todoListElement.appendChild(listElement);
  });
}
