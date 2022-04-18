import { Theme } from "../theme/Theme";

import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

export const Result = ({ nick, setNick, points, setPoints }) => {
  const handleNewGame = (e) => {
    setPoints(0);
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
          margin: "1rem",
          padding: ".5rem",
        }}
      >
        Congratulations, {nick}!
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: Theme.palette.primary.contrastText,
          padding: ".5rem",
        }}
      >
        Your score:
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "blue",
          padding: ".5rem",
        }}
      >
        {points} {points === 1 ? "point" : "points"}
      </Typography>
      <Button
        onClick={handleNewGame}
        component={Link}
        to="/"
        variant="outlined"
        sx={{
          margin: "1rem",
          height: "3rem",
          color: Theme.palette.primary,
        }}
      >
        Start again
      </Button>
    </Box>
  );
};
