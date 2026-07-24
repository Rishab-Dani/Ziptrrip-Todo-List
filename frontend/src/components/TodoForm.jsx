import { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const submit = (e) => {
    e.preventDefault();

    onAdd({
      title,
      description,
      priority,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <div className="form-card">
      <h2>Add New Todo</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>

        <button type="submit">➕ Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;