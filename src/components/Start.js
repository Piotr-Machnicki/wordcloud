import { Theme } from "../theme/Theme";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  FormGroup,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";

export const Start = ({ nick, setNick }) => {
  const handleChangeNick = (e) => {
    setNick(e.target.value);
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!nick) {
      e.preventDefault();
      alert("Text field is empty!");
    } else {
      navigate.push("/game");
    }
  };

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          color: Theme.palette.primary.contrastText,
          textAlign: "center",
          padding: "2rem",
        }}
      >
        Wordcloud game
      </Typography>
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
            sx={{
              height: "3rem",
              width: "15rem",
            }}
            onChange={handleChangeNick}
          />
          <FormHelperText
            sx={{
              margin: ".25rem",
              height: "1rem",
            }}
          >
            Enter your nickname to proceed...
          </FormHelperText>
        </Box>
        <Button
          onClick={handleClick}
          component={Link}
          to="/game"
          variant="outlined"
          sx={{
            margin: "1rem",
            height: "3rem",
            color: Theme.palette.primary,
          }}
        >
          Play
        </Button>
      </FormGroup>
    </Box>
  );
};
