import "./App.css";
import Header from "./Componentes/Header/Header";
import { BackendCallProvider } from "./Context/BackendCallContext";

// import MenuLateral from "./Componentes/MenuLateral/MenuLateral";

function App() {
  return (
    <>
    <BackendCallProvider>
    <Header/>
    </BackendCallProvider>
    </>
  );
}

export default App;
