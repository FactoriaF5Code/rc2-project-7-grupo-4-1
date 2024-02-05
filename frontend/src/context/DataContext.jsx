// Archivo: DataContext.js
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [docs, setDocs] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setDocs(data);
        setNeedsReload(false);
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };
  const getDoc = async (docs, URL) => {
    try {
      const response = await fetch(`${URL}`);
      if (response.ok) {
        const data = await response.json();
        console.log("Obtenido", data);
      } else {
        console.error("Error al obtener");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const postDoc = async (newDocs, URL) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDocs),
      };

      const response = await fetch(URL, options);
      if (response.ok) {
        setDocs([]);
        setNeedsReload(true);
        alert("Realizado con éxito");
      } else {
        alert("Error al realizar la operación");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  useEffect(() => {
    if (needsReload) {
      fetchData("http://localhost:9000/docs");
    }
  }, [needsReload]);

  const value = {
    docs,
    needsReload,
    fetchData,
    postDoc,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
