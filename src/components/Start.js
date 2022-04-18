import { Theme } from "../theme/Theme";

import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  FormGroup,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";

export const Start = ({ nick, setNick, randomizer, setRandomizer }) => {
  const handleChangeNick = (e) => {
    setNick(e.target.value);
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!nick) {
      e.preventDefault();
      alert("Text field is empty!");
    } else {
      setRandomizer(Math.floor(Math.random() * 3 + 1));
      navigate("/game");
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
            value={nick}
            placeholder="Enter your nickname here..."
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
