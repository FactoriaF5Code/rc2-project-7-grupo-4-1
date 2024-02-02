
import { DataProvider } from './context/DataContext'; 
import Header from './Componentes/Header/Header'; 

function App() {
  return (
    <DataProvider>
      
      <Header />
      
    </DataProvider>
  );
}

export default App;

