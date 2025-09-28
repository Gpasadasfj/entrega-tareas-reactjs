import { useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";

export default function Ej4() {
  const [item, setItem] = useState("");
  const itemList = [
    "Pan",
    "Huevos",
    "Leche",
    "Arroz",
    "Pasta",
    "Maíz",
    "Atún",
    "Pollo",
  ];

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio">
        <h2>Filtro de búsqueda en tiempo real</h2>
        <label htmlFor="ej4Input">
          Introduzca el nombre del elemento que desea buscar
        </label>
        <input
          type="text"
          id="ej4Input"
          className="ej4Input"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <ul class="ej4ItemList">
          {itemList
            .filter((e) =>
              e.toLocaleLowerCase().includes(item.toLocaleLowerCase())
            )
            .map((el, i) => (
              <li key={i}>{el}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
