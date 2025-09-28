import { useEffect, useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";
import { useRef } from "react";

export default function Ej6() {
  const [timer, setTimer] = useState({
    s: 0,
    m: 0,
    h: 0,
  });

  const intervalRef = useRef(null);

  const addTime = () => {
    setTimer((prev) => {
      let { s, m, h } = prev;
      s += 1;
      if (s === 60) {
        s = 0;
        m += 1;
        if (m === 60) {
          m = 0;
          h += 1;
        }
      }
      return { s, m, h };
    });
  };

  const formatedTimer = () => {
    return `${formatNum(timer.h)}:${formatNum(timer.m)}:${formatNum(timer.s)}`;
  };

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(addTime, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer({ s: 0, m: 0, h: 0 });
  };

  const formatNum = (num) => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio">
        <h2>Temporizador con inicio, pausa y reinicio</h2>
        <div className="timer">{formatedTimer()}</div>
        <div>
            <button onClick={startTimer} className="start">Iniciar</button>
            <button onClick={pauseTimer} className="pause">Pausar</button>
            <button onClick={resetTimer} className="reset">Reiniciar</button>
        </div>
      </div>
    </div>
  );
}
