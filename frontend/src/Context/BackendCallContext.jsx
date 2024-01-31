import { createContext, useContext, useEffect, useState } from "react";

export const BackendCallContext = createContext();
export const BackendCallProvider = ({ children }) => {
  const [docs, setDocs] = useState([]);
  const [newDocs, setNewDocs] = useState("");
  const [needsReload, setNeedsReload] = useState(true);
  const URL = "http://localhost:9000/docs";

  useEffect(() => {
    if (needsReload) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setDocs(data);
          setNeedsReload(false);
        });
    }
  }, [needsReload]);

  const postdoc = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newDocs }),
    };
    fetch(URL, options).then((response) => {
      if (response.ok) {
        setNewDocs("");
        setNeedsReload(true);
        alert("realizado con exito");
      }
    });
  };
  const contextValue = { docs, setDocs, newDocs, setNewDocs, postdoc };

  return (
    <BackendCallContext.Provider value={{ contextValue }}>
      {children}
    </BackendCallContext.Provider>
  );
};
export const useBackendCallContext = () => {
  return useContext(BackendCallContext);
};
