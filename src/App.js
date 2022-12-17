import "./App.css";
import HomePage from "./Components/HomePage";
import DriftPage from "./Components/DriftPage";
import TimeAttackPage from "./Components/TimeAttackPage";
import ForzaPage from "./Components/ForzaPage";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
