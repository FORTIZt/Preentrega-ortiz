import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const [nombre, setNombre] = useState("Andrés");

  const saludo = "Hola Espero Que Te Encuentres Muy Bien!";

  return (
    <div>
      <Navbar />
      <button onClick={() => setNombre("sultanito")}>Cambiar nombre</button>
      <HomeContainer nombre={nombre} />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
