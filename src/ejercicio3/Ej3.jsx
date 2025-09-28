import { useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";

export default function Ej3() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const onSetItem = () => {
    if (item != "") {
      setItems([...items, item]);
      setItem("");
    }
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio3">
        <h2>Lista dinámica</h2>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSetItem();
            }
          }}
        />
        <button onClick={onSetItem}>Añadir tarea</button>
        <div>
          <h3 className="taskListTitle">Lista de elementos</h3>
          <ul>
            {items.map((e, i) => (
              <li key={i}>
                {e} <button onClick={() => deleteItem(i)}>Borrar tarea</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
