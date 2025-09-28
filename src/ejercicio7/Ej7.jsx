import { useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";

export default function Ej7() {
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
  const todos = letras + letras.toUpperCase() + numeros + simbolos;

  const [nChar, setnChar] = useState(0);
  const [passwd, setPasswd] = useState("");

  const passwGenerator = () => {
    if (nChar < 4 || isNaN(nChar)) {
      alert("La contraseña debe tener al menos 4 caracteres");
      return "";
    }

    let newPassw = "";
    for (let i = 0; i < nChar; i++) {
      const randomNumber = Math.floor(Math.random() * todos.length);
      newPassw += todos[randomNumber];
    }
    return setPasswd(newPassw);
  };

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio">
        <h2>Generador de contraseñas aleatorias</h2>
        <label htmlFor="ej7input">
          Introduzca la cantidad de caracteres que desea que tenga su
          contraseña:
        </label>
        <input
          type="number"
          className="ej7input"
          id="ej7input"
          value={nChar}
          onChange={(e) => setnChar(e.target.value)}
        />
        <button onClick={passwGenerator}>Generar contraseña</button>
        <p>
          Contraseña: <span className="passw">{passwd}</span>
        </p>
      </div>
    </div>
  );
}
