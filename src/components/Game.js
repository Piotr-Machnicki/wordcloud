import { useState, useEffect } from "react";

import { Theme } from "../theme/theme";

import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

export const Game = ({ points, setPoints }) => {
  const [data, setData] = useState([]);
  const [answerCheck, setAnswerCheck] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);

  const getData = () => {
    fetch("vehicles.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const allWords = Object.values(data)[1];
  const goodWords = Object.values(data)[2];

  const handleClick = (e) => {
    if (selectedWords.includes(e.target.name)) {
      setSelectedWords(selectedWords.filter((word) => word !== e.target.name));
    } else {
      setSelectedWords([...selectedWords, e.target.name]);
    }
  };

  const pointsCounter = (item) => {
    for (let i = 0; i < allWords.length; i++) {
      selectedWords.includes(item);
    }
  };

  const handleAnswerCheck = (e) => {
    setAnswerCheck(true);
    pointsCounter();
    setPoints(points);
  };

  return (
    <Box sx={{ backgroundColor: Theme.palette.secondary.main }}>
      <Typography
        variant="h3"
        sx={{
          color: Theme.palette.secondary.contrastText,
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {data.question}
      </Typography>
      {allWords &&
        allWords.length > 0 &&
        answerCheck === false &&
        allWords.map((item) => (
          <button
            onClick={handleClick}
            name={item}
            style={{
              color: (() => {
                if (selectedWords.includes(item)) {
                  return "pink";
                }
              })(),
            }}
          >
            {item}
          </button>
        ))}
      {answerCheck === false && (
        <Button
          onClick={handleAnswerCheck}
          variant="outlined"
          sx={{
            margin: "1rem",
            height: "3rem",
            color: Theme.palette.primary,
            backgroundColor: Theme.palette.secondary.contrastText,
            ":hover": { backgroundColor: Theme.palette.primary.contrastText },
          }}
        >
          Check
        </Button>
      )}
      {allWords &&
        allWords.length > 0 &&
        answerCheck === true &&
        allWords.map((item) => (
          <button
            style={{
              color: (() => {
                if (selectedWords.includes(item) && goodWords.includes(item)) {
                  return "green";
                } else if (
                  selectedWords.includes(item) &&
                  goodWords.includes(item) === false
                ) {
                  return "red";
                }
              })(),
            }}
          >
            {item}
          </button>
        ))}
      {answerCheck === true && (
        <Button
          component={Link}
          to="/result"
          variant="outlined"
          sx={{
            margin: "1rem",
            height: "3rem",
            color: Theme.palette.primary,
            backgroundColor: Theme.palette.secondary.contrastText,
            ":hover": { backgroundColor: Theme.palette.primary.contrastText },
          }}
        >
          Finish game
        </Button>
      )}
    </Box>
  );
};
