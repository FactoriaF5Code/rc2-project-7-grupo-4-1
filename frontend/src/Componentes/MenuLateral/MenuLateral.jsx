import "./MenuLateral.css";
import login from "../../assets/login.png";
import lupa from "../../assets/lupa.png";
import arrow from "../../assets/Arrow 1.png";
import { useState } from "react";

export default function MenuLateral() {
  const [showMenu, setShowMenu] = useState(false);

  const mostrarse = () => setShowMenu(!showMenu);
  return (
    <section className="contenedor">
      <div className={`menuLateral ${showMenu ? `mostrar` : ""}`}>
        <div className="login">
          <img className="login__img" src={login} alt="login" />
          <p className="login__description">Login</p>
        </div>
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="¿Que estas buscando?"
          />
          <img className="search__img" src={lupa} alt="lupa" />
        </div>
        <button className="menuLateral__button">Añadir</button>
      </div>
      {showMenu}
      <button className="button__mostrarse" onClick={mostrarse}>
        <img className="button__mostrarse__arrow" src={arrow} alt="flecha" />
      </button>
    </section>
  );
}
