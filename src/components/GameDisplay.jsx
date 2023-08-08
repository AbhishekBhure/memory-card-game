import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";
const GameDisplay = ({ cards, index, onClick }) => {
  const handleClick = () => {};
  return (
    <Grid container spacing={1}>
      {cards.map((card) => {
        return (
          <Grid item xs={3}>
            <CardComponent card={card} index={index} onClick={onClick} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GameDisplay;
