import { Routes, Route } from "react-router-dom";
import { Start } from "../components/Start";
import { Game } from "../components/Game";
import { Result } from "../components/Result";
export const Content = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/game" element={<Game />} />
    <Route path="/result" element={<Result />} />
  </Routes>
);
