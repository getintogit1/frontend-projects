import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import EasyLearn from "./pages/EasyLearn.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Robot from "./pages/Robot.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/easylearn" element={<EasyLearn />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/robot" element={<Robot />} />
    </Routes>
  );
}
