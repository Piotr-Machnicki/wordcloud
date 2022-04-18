import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Start } from "./components/Start";
import { Game } from "./components/Game";
import { Result } from "./components/Result";

function App() {
  const [dataAnimals, setDataAnimals] = useState([]);
  const [dataColors, setDataColors] = useState([]);
  const [dataVehicles, setDataVehicles] = useState([]);
  const [nick, setNick] = useState("");
  const [points, setPoints] = useState();
  const [randomizer, setRandomizer] = useState();

  const getDataAnimals = () => {
    fetch("animals.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDataAnimals(myJson);
      });
  };

  const getDataColors = () => {
    fetch("colors.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDataColors(myJson);
      });
  };

  const getDataVehicles = () => {
    fetch("vehicles.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setDataVehicles(myJson);
      });
  };

  useEffect(() => {
    getDataAnimals();
    getDataColors();
    getDataVehicles();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Start
              nick={nick}
              setNick={setNick}
              randomizer={randomizer}
              setRandomizer={setRandomizer}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              points={points}
              setPoints={setPoints}
              randomizer={randomizer}
              setRandomizer={setRandomizer}
              dataAnimals={dataAnimals}
              setDataAnimals={setDataAnimals}
              dataColors={dataColors}
              setDataColors={setDataColors}
              dataVehicles={dataVehicles}
              setDataVehicles={setDataVehicles}
            />
          }
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
