import "./MenuLateral.css";
import login from "../../assets/login.png";
import lupa from "../../assets/lupa.png";

export default function MenuLateral() {
  return (
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
  );
}
