import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Start } from "./components/Start";
import { Game } from "./components/Game";
import { Result } from "./components/Result";

function App() {
  const [nick, setNick] = useState("");
  const [points, setPoints] = useState();
  return (
    <>
      <Routes>
        <Route path="/" element={<Start nick={nick} setNick={setNick} />} />
        <Route
          path="/game"
          element={<Game points={points} setPoints={setPoints} />}
        />
        <Route
          path="/result"
          element={
            <Result
              nick={nick}
              setNick={setNick}
              points={points}
              setPoints={setPoints}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
