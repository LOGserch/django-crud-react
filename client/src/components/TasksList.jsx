import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
// import from './Task'

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return <div>
    {
      tasks.map((task) => (
       
      ))

    }
  </div>

};


