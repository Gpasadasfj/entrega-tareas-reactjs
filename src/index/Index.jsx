import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Index() {
  return (
    <div>
      <Header />
      <div className="exIndex">
      <nav className="exList">
        <Link className="exLink" to="ej1">Cambiador de color de fondo</Link>
        <Link className="exLink" to="ej2">Contador de clicks</Link>
        <Link className="exLink" to="ej3">Lista dinámica</Link>
        <Link className="exLink" to="ej4">Filtro de búsqueda en tiempo real</Link>
        <Link className="exLink" to="ej5">Calculadora sencilla</Link>
        <Link className="exLink" to="ej6">Temporizador</Link>
        <Link className="exLink" to="ej7">Generador de contraseñas</Link>
        <Link className="exLink" to="ej8">Contador de letras y palabras</Link>
        <Link className="exLink" to="ej9">Lista de tareas con LocalStorage</Link>
      </nav>

      </div>
    </div>
  );
}
