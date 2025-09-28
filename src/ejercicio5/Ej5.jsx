import { useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";

export default function Ej5() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(0);

  const sumar = () => {
    if (n1 == 0 || n2 == 0) {
      setResult("DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS");
    } else {
      setResult(Number(n1) + Number(n2));
    }
  };

  const restar = () => {
    if (n1 == 0 || n2 == 0) {
      setResult("DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS");
    } else {
      setResult(Number(n1) - Number(n2));
    }
  };

  const multiplicar = () => {
    if (n1 == 0 || n2 == 0) {
      setResult("DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS");
    } else {
      setResult(Number(n1) * Number(n2));
    }
  };

  const dividir = () => {
    if (n2 == 0) {
      setResult("DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS");
    } else if (Number(n1) == 0) {
      setResult(0);
    } else {
      setResult(Number(n1) / Number(n2));
    }
  };

  return (
    <div>
      <Header />
      <BackButton />

      <div className="ejercicio">
        <h2>Calculadora sencilla</h2>
        <div>
          <label htmlFor="n1">Número 1</label>
          <input
            type="number"
            id="n1"
            className="n1"
            value={n1}
            onChange={(e) => setN1(e.target.value)}
          />
          <label htmlFor="n2">Número 2</label>
          <input
            type="number"
            id="n2"
            className="n2"
            value={n2}
            onChange={(e) => setN2(e.target.value)}
          />
        </div>

        <div>
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
          <button onClick={multiplicar}>Multiplicar</button>
          <button onClick={dividir}>Dividir</button>
        </div>
        <p>Resultado: <span className="result">{result}</span></p>
      </div>
    </div>
  );
}
