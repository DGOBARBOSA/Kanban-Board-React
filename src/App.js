import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/NavBar/Navbar";
import TaskList from "./components/TaskList/TaskList";

// const task = {
//   id: 0,
//   title: "Nova Tarefa",
//   state: "pendente"
// };

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    // console.log("Função sendo chamada em APP.js");
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
    // console.log("Update Task sendo Chamado");
    setTasks((existingTasks) => {
      return existingTasks.map((tasks) => {
        if (tasks.id === id) {
          return { ...tasks, title, state };
        } else {
          console.log("Editar");
          return tasks;
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
          title={`Completo`}
          onAddTask={addTask}
          taskState="Completo"
          tasks={tasks.filter((t) => t.state === "Completo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={`Fazendo`}
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title={`Pendente`}
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
