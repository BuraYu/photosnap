import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Fourofour from "./Pages/Fourofour";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Fourofour />} />
      </Routes>
    </div>
  );
}

export default App;
