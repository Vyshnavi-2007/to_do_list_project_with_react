
/*import { useState } from "react";
import Header from "./header.jsx";
import "./todo.css";
import background from "../assets/img3.jpg";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Enter a mission!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const completed = tasks.filter((item) => item.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : (completed / tasks.length) * 100;

  return (
   <div
      className="todo-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header username="Vyshnavi" />

      <div className="todo-card">
        <h2>Today's Mission</h2>

        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new mission..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No missions yet...</p>
          ) : (
            tasks.map((item) => (
              <div className="task" key={item.id}>
                <div className="task-left">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                  />

                  <span className={item.completed ? "completed" : ""}>
                    {item.text}
                  </span>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="progress-section">
          <h3>Progress : {Math.round(progress)}%</h3>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>

          <br />

          {progress === 100 && tasks.length > 0 ? (
            <h2 className="completed-msg">
              All Tasks Completed!
            </h2>
          ) : (
            <h3>
              Completed {completed} / {tasks.length}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;*/  
 /* This is code before stroing in local storage*/   
import { useState, useEffect } from "react";
import Header from "./header.jsx";
import "./todo.css";
import background from "img3.jpg";
function Todo() {
  const [task, setTask] = useState("");

  // Load tasks from localStorage only once
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") {
      alert("Enter a mission!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((item) => item.id !== id)
    );
  };

  const completed = tasks.filter((item) => item.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : (completed / tasks.length) * 100;

  return (
    <div
      className="todo-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header username="Vyshnavi" />

      <div className="todo-card">
        <h2>Today's Mission</h2>

        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a new mission..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p>No missions yet...</p>
          ) : (
            tasks.map((item) => (
              <div className="task" key={item.id}>
                <div className="task-left">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTask(item.id)}
                  />

                  <span
                    className={item.completed ? "completed" : ""}
                  >
                    {item.text}
                  </span>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="progress-section">
          <h3>Progress : {Math.round(progress)}%</h3>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>

          <br />

          {progress === 100 && tasks.length > 0 ? (
            <h2 className="completed-msg">
              All Tasks Completed!
            </h2>
          ) : (
            <h3>
              Completed {completed} / {tasks.length}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
