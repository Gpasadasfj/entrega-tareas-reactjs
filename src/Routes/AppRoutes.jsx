import Ej1 from "../ejercicio1/Ej1";
import Ej2 from "../ejercicio2/Ej2";
import Ej3 from "../ejercicio3/Ej3";
import Ej4 from "../ejercicio4/Ej4";
import Ej5 from "../ejercicio5/Ej5";
import Ej6 from "../ejercicio6/Ej6";
import Ej7 from "../ejercicio7/Ej7";
import Ej8 from "../ejercicio8/Ej8";
import Ej9 from "../ejercicio9/Ej9";
import Index from "../index/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="ej1" element={<Ej1 />} />
        <Route path="ej2" element={<Ej2 />} />
        <Route path="ej3" element={<Ej3 />} />
        <Route path="ej4" element={<Ej4 />} />
        <Route path="ej5" element={<Ej5 />} />
        <Route path="ej6" element={<Ej6 />} />
        <Route path="ej7" element={<Ej7 />} />
        <Route path="ej8" element={<Ej8 />} />
        <Route path="ej9" element={<Ej9 />} />
      </Routes>
    </BrowserRouter>
  );
}
