import { useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";

export default function Ej2() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio">
        <h2>Contador de clicks</h2>
        <p className="nClicks">
          Número de clicks: <span>{clicks}</span>
        </p>
        <button onClick={() => setClicks((prev) => prev + 1)}>Púlsame!</button>
      </div>
    </div>
  );
}
