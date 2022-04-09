import { Routes, Route } from "react-router-dom";
import { Start } from "../components/Start";
import { Game } from "../components/Game";
export const Content = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/game" element={<Game />} />
  </Routes>
);
