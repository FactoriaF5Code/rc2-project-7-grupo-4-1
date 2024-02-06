import "./ListadoDocs.css";
import lapiz from "../../assets/lapiz.svg";
import { useDataContext } from "../../context/DataContext";
import papelera from "../../assets/papelera.svg";

export default function ListaDocs() {
  const { docs } = useDataContext();
  const { DeleteDoc } = useDataContext();
  return (
    <>
      <section className="contenedor__recursos">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="contenedor__recursos__item"
            aria-placeholder="hola"
          >
            {doc.title}
            <div className="contenedor__iconos">
            <img className="papelera" src={papelera} alt="logo_borrar" onClick={() => DeleteDoc(doc.id)} />
            <img className="lapiz" src={lapiz} alt="logo_editar" />
            
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
