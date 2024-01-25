import "./MenuLateral.css";
import login from "../../assets/login.png";
import lupa from "../../assets/lupa.png";
import arrow from "../../assets/Arrow 1.png"

export default function MenuLateral() {
  return (
    <section className="contenedor">
    <div className="menuLateral">
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
    <button className="button__esconderse"><img className="button__esconderse__arrow" src={arrow} alt="flecha" /></button>
    </section>
  );
}
