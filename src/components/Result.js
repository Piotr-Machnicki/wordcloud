import { useState } from "react";

import { Theme } from "../theme/theme";

import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

export const Result = () => {
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
        Congratulations, Piotr! Your score:
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        sx={{
          margin: "1rem",
          height: "3rem",
          color: Theme.palette.primary,
          backgroundColor: Theme.palette.secondary.contrastText,
          ":hover": { backgroundColor: Theme.palette.primary.contrastText },
        }}
      >
        Start again
      </Button>
    </Box>
  );
};
