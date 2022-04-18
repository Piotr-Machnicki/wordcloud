import { useState, useEffect } from "react";

import { Theme } from "../theme/Theme";

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
        return response.json();
      })
      .then(function (myJson) {
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

  let pointsCounter = 0;
  const checkMarkedAnswers = () => {
    selectedWords.map((item) => {
      if (goodWords.includes(item)) {
        return (pointsCounter = pointsCounter + 2);
      } else {
        return (pointsCounter = pointsCounter - 1);
      }
    });
    setPoints(pointsCounter);
  };

  const checkMissedAnswers = () => {
    goodWords.map((item) => {
      if (!selectedWords.includes(item)) {
        return (pointsCounter = pointsCounter - 1);
      } else {
        return pointsCounter;
      }
    });
    setPoints(pointsCounter);
  };

  const handleAnswerCheck = (e) => {
    setAnswerCheck(true);
    checkMarkedAnswers();
    checkMissedAnswers();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: Theme.palette.primary.contrastText,
          textAlign: "center",
          padding: "2rem",
        }}
      >
        {data.question}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "500px",
        }}
      >
        {allWords &&
          allWords.length > 0 &&
          answerCheck === false &&
          allWords.map((item) => (
            <button
              onClick={handleClick}
              name={item}
              style={{
                border: "none",
                background: Theme.palette.primary.main,
                cursor: "pointer",
                fontSize: "30px",
                padding: "25px 20px 20px",
                color: (() => {
                  if (selectedWords.includes(item)) {
                    return Theme.palette.primary.contrastText;
                  } else {
                    return Theme.palette.primary.hover;
                  }
                })(),
              }}
            >
              {item}
            </button>
          ))}
        {allWords &&
          allWords.length > 0 &&
          answerCheck === true &&
          allWords.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedWords.includes(item) && goodWords.includes(item) && (
                <p
                  style={{
                    fontSize: "15px",
                    color: "green",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  Good
                </p>
              )}
              {selectedWords.includes(item) &&
                goodWords.includes(item) === false && (
                  <p
                    style={{
                      fontSize: "15px",
                      color: "red",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Bad
                  </p>
                )}
              {selectedWords.includes(item) === false &&
                goodWords.includes(item) && (
                  <p
                    style={{
                      fontSize: "15px",
                      color: "orange",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Missed
                  </p>
                )}
              <button
                style={{
                  border: "none",
                  background: Theme.palette.primary.main,
                  fontSize: "30px",
                  padding: (() => {
                    if (selectedWords.includes(item)) {
                      return "5px 20px 20px";
                    } else if (goodWords.includes(item)) {
                      return "5px 20px 20px";
                    } else {
                      return "25px 20px 20px";
                    }
                  })(),

                  color: (() => {
                    if (
                      selectedWords.includes(item) &&
                      goodWords.includes(item)
                    ) {
                      return "green";
                    } else if (
                      selectedWords.includes(item) &&
                      goodWords.includes(item) === false
                    ) {
                      return "red";
                    } else if (
                      selectedWords.includes(item) === false &&
                      goodWords.includes(item)
                    ) {
                      return "orange";
                    }
                  })(),
                }}
              >
                {item}
              </button>
            </Box>
          ))}
      </Box>

      {answerCheck === false && (
        <Button
          onClick={handleAnswerCheck}
          variant="outlined"
          sx={{
            margin: "1rem",
            height: "3rem",
            color: Theme.palette.primary,
          }}
        >
          Check
        </Button>
      )}

      {answerCheck === true && (
        <Button
          component={Link}
          to="/result"
          variant="outlined"
          sx={{
            margin: "1rem",
            height: "3rem",
            color: Theme.palette.primary,
          }}
        >
          Finish game
        </Button>
      )}
    </Box>
  );
};
