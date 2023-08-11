import React from "react";
import { Grid, Container, Box, Button } from "@mui/material";
import CardComponent from "./CardComponent";
const GameDisplay = ({ cards, onClick, moves, score }) => {
  const handleClick = () => {};
  return (
    <Grid container spacing={1}>
      {cards.map((card) => {
        return (
          <Grid item xs={3} key={card.id}>
            <CardComponent card={card} onClick={onClick} />
          </Grid>
        );
      })}
      <Grid item></Grid>
      <Grid item xs={12}>
        <Container
          sx={{
            border: 1,
            padding: 1,
            borderRadius: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Moves: {moves}
          </Box>
          <Button>Start Over</Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Score: {score}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default GameDisplay;
