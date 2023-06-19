import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Link to="/task">
        <h1>Task App</h1>
      </Link>

      <Link to="/task-create">create task</Link>
    </div>
  );
};