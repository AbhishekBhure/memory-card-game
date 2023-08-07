import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import ReactCardFlip from "react-card-flip";

const GameDisplay = ({ cards }) => {
  return (
    <Grid container>
      <Grid item>
        <ReactCardFlip isFlipped={false}>
          <Paper>
            <Box
              sx={{ height: 100, cursor: "pointer", background: "gray" }}
              display="flex"
            >
              Front
            </Box>
          </Paper>
          <Paper>
            <Box>Back</Box>
          </Paper>
        </ReactCardFlip>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default GameDisplay;
