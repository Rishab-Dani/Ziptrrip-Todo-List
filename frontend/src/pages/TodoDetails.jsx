import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { getTodo, updateTodo } from "../services/todoService";

function TodoDetails() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "Medium",
    completed: false,
  });

  useEffect(() => {
    const loadTodo = async () => {
      try {
        const response = await getTodo(id);
        setTodo(response.data);
      } catch (error) {
        console.error(error);
        alert("Unable to load todo.");
      }
    };

    loadTodo();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompleted = () => {
    setTodo((prev) => ({
      ...prev,
      completed: !prev.completed,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await updateTodo(id, todo);

      alert("✅ Todo updated successfully!");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update todo.");
    }
  };

  return (
    <div className="details-card">

      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <h1>📝 Edit Todo</h1>

      <p className="details-subtitle">
        Update your task details and save your changes.
      </p>

      <form onSubmit={handleSave} className="details-form">

        {/* Title */}

        <label>📝 Title</label>

        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />

        {/* Description */}

        <label>📄 Description</label>

        <textarea
          name="description"
          rows="4"
          value={todo.description}
          onChange={handleChange}
          placeholder="Enter description"
        />

        {/* Priority */}

        <label>🚩 Priority</label>

        <select
          name="priority"
          value={todo.priority}
          onChange={handleChange}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>

        {/* Status */}

        <div className="status-box">
          <span>
            <strong>Status</strong>
          </span>

          <span className={todo.completed ? "completed" : "pending"}>
            {todo.completed ? "✅ Completed" : "⏳ Pending"}
          </span>
        </div>

        {/* Buttons */}

        <div className="details-buttons">

          <button
            type="button"
            onClick={handleCompleted}
          >
            {todo.completed
              ? "↩ Mark Pending"
              : "✔ Mark Completed"}
          </button>

          <button type="submit">
            💾 Save Changes
          </button>

        </div>

      </form>

    </div>
  );
}

export default TodoDetails;