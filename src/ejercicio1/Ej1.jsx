import BackButton from "../backButton/BackButton";
import Header from "../header/Header";
import { useState } from "react";

export default function Ej1() {
  const [color, setColor] = useState("");

  const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const onSetColor = () => {
    setColor(randomColor);
  };

  return (
    <div>
      <Header />
      
      <BackButton />

      <div className="ejercicio" style={{ backgroundColor: color }}>
        <h2>Cambiador de color de fondo</h2>
        <button onClick={onSetColor}>Cambiar color</button>
      </div>
    </div>
  );
}
