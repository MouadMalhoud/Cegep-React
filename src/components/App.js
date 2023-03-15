import Accueil from './Accueil.js';
import Cours from './Cours';
import Professeurs from './Professeurs.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../styles/App.css';
import BarreNavigation from './BarreNavigation';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <BarreNavigation />
      <Routes>
        <Route path="/Accueil" element={<Accueil/>} exact />
        <Route path="/Cours" element={<Cours/>} exact />
        <Route path="/Professeurs" element={<Professeurs/>} exact />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
