import { useState } from "react";

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

export const Login = () => {
  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        Wordcloud game
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <OutlinedInput
              autoFocus
              placeholder="Enter your nickname here..."
              required
              value={name}
              sx={{
                height: "3rem",
                width: "15rem",
                backgroundColor: Theme.palette.secondary.contrastText,
                ":hover": {
                  backgroundColor: Theme.palette.primary.contrastText,
                },
              }}
              onChange={handleChangeName}
            />
            <FormHelperText
              sx={{
                margin: ".25rem",
                height: "1rem",
                color: Theme.palette.secondary.contrastText,
              }}
            >
              Enter your nickname to proceed...
            </FormHelperText>
          </Box>
          <Button
            component={Link}
            to="/game"
            type="submit"
            variant="outlined"
            sx={{
              margin: "1rem",
              height: "3rem",
              color: Theme.palette.primary,
              backgroundColor: Theme.palette.secondary.contrastText,
              ":hover": { backgroundColor: Theme.palette.primary.contrastText },
            }}
          >
            Play
          </Button>
        </FormGroup>
      </form>
    </Box>
  );
};
