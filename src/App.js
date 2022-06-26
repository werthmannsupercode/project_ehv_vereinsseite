import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import MitgliedWerden from "./pages/MitgliedWerden";
import Jahresablauf from "./pages/Jahresablauf";
import AktivWerden from "./pages/AktivWerden";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";
import Lageplan from "./pages/Lageplan";
import Datenschutz from "./pages/Datenschutz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueberuns" element={<UeberUns />} />
        <Route path="/mitgliedeerden" element={<MitgliedWerden />} />
        <Route path="/jahresablauf" element={<Jahresablauf />} />
        <Route path="/aktivwerden" element={<AktivWerden />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/lageplan" element={<Lageplan />} />
      </Routes>

    </div>
  );
}

export default App;
