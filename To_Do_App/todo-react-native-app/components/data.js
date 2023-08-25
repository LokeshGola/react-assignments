// data.js
const todos = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, and fruits',
      completed: false,
    },
    {
      id: 2,
      title: 'Go to the gym',
      description: 'Cardio and strength training',
      completed: false,
    },
    // Add more todos if needed
  ];
  
//   export { todos };

// data.js
// const todos = []; // Your array of todos

const createTodo = (title, description) => {
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const readTodos = () => {
  return todos;
};

const updateTodo = (id, updatedTodo) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return todos[index];
  }
  return null;
};

const deleteTodo = id => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

export { todos, createTodo, readTodos, updateTodo, deleteTodo };

  