import React from "react";
import { Box, Paper } from "@mui/material";
import ReactCardFlip from "react-card-flip";

const CardComponent = ({ card, onClick }) => {
  return (
    <ReactCardFlip isFlipped={card.open}>
      <Paper>
        <Box
          sx={{ height: 100, cursor: "pointer", background: "gray" }}
          onClick={onClick(card.id)}
        />
      </Paper>
      <Paper>
        <Box
          sx={{
            height: 100,
            cursor: "pointer",
            background: "white",
            fontSize: 72,
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {card.type}
        </Box>
      </Paper>
    </ReactCardFlip>
  );
};

export default CardComponent;
