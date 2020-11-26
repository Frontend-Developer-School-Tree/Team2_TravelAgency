import { ApiStorage } from "./ApiContext";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import PhotoPrincipal from "./components/Navbar/PhotoPrincipal";
import CardMaps from "./components/Maps/CardMaps";
import AgenteCard from "./components/Agente/AgenteCard";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ApiStorage>
        <PhotoPrincipal />
        <CardMaps />
        <AgenteCard />
      </ApiStorage>
    </div>
  );
}

export default App;
