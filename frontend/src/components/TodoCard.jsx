import { Link } from "react-router-dom";

function TodoCard({ todo, onDelete }) {
  const createdDate = new Date(todo.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="todo-card">
      {/* Header */}
      <div className="todo-header">
        <h3>{todo.title}</h3>

        <span className={`priority ${todo.priority.toLowerCase()}`}>
          {todo.priority}
        </span>
      </div>

      {/* Description */}
      <p className="description">
        {todo.description || "No description available."}
      </p>

      {/* Status */}
      <p>
        <strong>Status:</strong>{" "}
        <span className={todo.completed ? "completed" : "pending"}>
          {todo.completed ? "✅ Completed" : "⏳ Pending"}
        </span>
      </p>

      {/* Created Date */}
      <p className="created-date">
        <strong>Created:</strong> 📅 {createdDate}
      </p>

      {/* Buttons */}
      <div className="buttons">
        <Link to={`/todo?id=${todo.id}`}>
          <button className="view-btn">View</button>
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;