import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import ReactCardFlip from "react-card-flip";

const GameDisplay = ({ cards }) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <ReactCardFlip isFlipped={true}>
          <Paper>
            <Box
              sx={{ height: 100, cursor: "pointer", background: "gray" }}
              display="flex"
              justifyContent="space-around"
            />
          </Paper>
          <Paper>
            <Box
              sx={{ height: 100, cursor: "pointer", background: "gray" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              🛺
            </Box>
          </Paper>
        </ReactCardFlip>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default GameDisplay;
