import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/Tasklist/Tasklist";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((exitingTasks) => {
      return exitingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pending"
          onAddTask={addTask}
          taskState="Pending"
          tasks={tasks.filter((t) => t.state === "Pending")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="InProgress"
          onAddTask={addTask}
          taskState="InProgress"
          tasks={tasks.filter((t) => t.state === "InProgress")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Finished"
          onAddTask={addTask}
          taskState="Finished"
          tasks={tasks.filter((t) => t.state === "Finished")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
