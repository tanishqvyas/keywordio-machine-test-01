import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>sample navigation</nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
