import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";




export default function InvestmentForm() {
  return (
    <div className="user-input h-3/4 flex flex-col justify-center">
      <Grid container spacing={5} >
        <Grid item xs={6}>
          <TextField></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField></TextField>
        </Grid>
      </Grid>
    </div>
  );
}
