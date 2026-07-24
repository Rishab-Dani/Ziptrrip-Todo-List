import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";

import {
  getTodos,
  createTodo,
  deleteTodo,
} from "../services/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //load todos from backend
  const loadTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Load Error:", error);
    }
  };

  //load todos on component mount
  useEffect(() => {
    loadTodos();
  }, []);

  //handle add function
  const handleAdd = async (todo) => {
    try {
      await createTodo(todo);
      loadTodos();
    } catch (error) {
      console.error("Create Error:", error);
    }
  };

  //handle delete function
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this todo?"
  );

  if (!confirmDelete) return;

  try {
    await deleteTodo(id);
    loadTodos();
  } catch (error) {
    console.error(error);
  }
};

//render
  return (
    <>
      <Navbar />

      <div className="container">

<div className="page-header">
    <h1>Todo Dashboard</h1>
</div>

<div className="stats">

    <div className="stat-card">
        <h2>{todos.length}</h2>
        <p>Total Todos</p>
    </div>

    <div className="stat-card">
        <h2>
            {todos.filter(t=>!t.completed).length}
        </h2>

        <p>Pending</p>
    </div>

    <div className="stat-card">
        <h2>
            {todos.filter(t=>t.completed).length}
        </h2>

        <p>Completed</p>
    </div>

</div>

<TodoForm onAdd={handleAdd} />

        {todos.length === 0 ? (
         <div className="empty-state">
    <h2>📋</h2>
    <h3>No Todos Yet</h3>
    <p>Create your first task above.</p>
</div>
        ) : (
   todos.map((todo) => (
  <TodoCard
    key={todo.id}
    todo={todo}
    onDelete={handleDelete}
  />
))
        )}

      </div>
    </>
  );
}

export default TodoList;