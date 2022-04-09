import { useState, useEffect, useContext } from "react";

import { Theme } from "../theme/theme";

import { Link } from "react-router-dom";

import {
  Box,
  Button,
  FormGroup,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";

export const Game = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("animals.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
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
        Game itself
        {data && data.length > 0 && data.map((item) => <p>{item.all_words}</p>)}
      </Typography>
    </Box>
  );
};
