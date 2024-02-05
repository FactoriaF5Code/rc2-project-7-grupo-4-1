// MenuLateral.jsx

import { useDataContext } from "../../context/DataContext"; // Ajusta la ruta según tu estructura de archivos
import "./MenuLateral.css";
import arrow from "../../assets/Arrow 1.png";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ListadoDocs from "../ListadoDocs/ListadoDocs";
import setNewDocs from "../Modal/Modal";
export default function MenuLateral() {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useDataContext();

  const mostrarse = () => setShowMenu(!showMenu);

  return (
    <section className="contenedor">
      <div className={`menuLateral ${showMenu ? `mostrar` : ""}`}>
        <Modal data={data} {...setNewDocs} />
        <ListadoDocs />
      </div>
      <button
        className={`button__mostrarse ${showMenu ? "rotar" : ""}`}
        onClick={mostrarse}
      >
        <img className="button__mostrarse__arrow" src={arrow} alt="flecha" />
      </button>
    </section>
  );
}
