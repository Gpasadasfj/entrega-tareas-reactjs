import BackButton from "../backButton/BackButton";
import Header from "../header/Header";
import { useEffect, useState } from "react";

export default function Ej9() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const onSetItem = () => {
    if (task != "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
      console.log(tasks);
    }
  };

  const deleteTasks = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio9">
        <h2>Lista de tareas con LocalStorage</h2>
        <div>
          <input
            type="text"
            value={task}
            className="ej9input"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSetItem();
              }
            }}
          />
          <button className="ej9button" onClick={onSetItem}>Añadir tarea</button>
          <div className="taskList">
            <h3>Lista de tareas</h3>
            <button onClick={deleteTasks}>Limpiar tareas completadas</button>
            <ul id="listItem">
              {tasks.map((t, i) => (
                <li key={i}>
                  {t.text}
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => {
                      const newTasks = [...tasks];
                      newTasks[i].completed = !newTasks[i].completed;
                      setTasks(newTasks);
                    }}
                  ></input>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
