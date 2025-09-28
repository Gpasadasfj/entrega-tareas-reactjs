import { useEffect, useState } from "react";
import BackButton from "../backButton/BackButton";
import Header from "../header/Header";

export default function Ej8() {
  const [txt, setTxt] = useState("");
  const [letters, setLetters] = useState(0);
  const [words, setWords] = useState(0);

  useEffect(() => {
    let cleanText = txt.trim();
    let textArray = cleanText.split(/\s+/);
    let totalLetters =
      cleanText === "" ? 0 : textArray.reduce((acum, e) => acum + e.length, 0);
    let nWords = cleanText === "" ? 0 : textArray.length;
    setLetters(totalLetters);
    setWords(nWords);
  }, [txt]);

  return (
    <div>
      <Header />
      <BackButton />
      <div className="ejercicio">
        <h2>Contador de palabras y caracteres</h2>
        <div>
          <textarea
            value={txt}
            onChange={(e) => {
              setTxt(e.target.value);
            }}
            className="ej8TextArea"
          ></textarea>
          <div>
            <p>
              Número de palabras: <span className="nWords">{words}</span>
            </p>
            <p>
              Número de letras: <span className="nLetters">{letters}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
