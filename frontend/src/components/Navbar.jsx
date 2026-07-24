import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📝 Todo List</h2>

      <Link to="/">Dashboard</Link>
    </nav>
  );
}

export default Navbar;