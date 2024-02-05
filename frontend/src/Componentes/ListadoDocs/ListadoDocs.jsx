import "./ListadoDocs.css";

import { useDataContext } from "../../context/DataContext";
export default function ListaDocs() {
  const { docs } = useDataContext();
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
          </div>
        ))}
      </section>
    </>
  );
}
