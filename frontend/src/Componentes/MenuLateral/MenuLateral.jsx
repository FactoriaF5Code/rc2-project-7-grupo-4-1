import "./MenuLateral.css";
import icon from "../../assets/icon-plus.png";
import arrow from "../../assets/Arrow 1.png";
import { useState } from "react";

export default function MenuLateral() {
  const [showMenu, setShowMenu] = useState(false);

  const mostrarse = () => setShowMenu(!showMenu);
  return (
    <section className="contenedor">
      <div className={`menuLateral ${showMenu ? `mostrar` : ""}`}>
        <button className="menuLateral__button">Añadir <img className="menuLateral__button__img" src={icon} alt="icono" /></button>
      </div>
      <button className="button__mostrarse" onClick={mostrarse}>
        <img className="button__mostrarse__arrow" src={arrow} alt="flecha" />
      </button>
    </section>
  );
}
