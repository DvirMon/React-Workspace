"use client";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Fragment, useState } from "react";

function Input({ richText = false, ...props }) {
  return (
    <Fragment>
      {richText ? <TextField multiline {...props} /> : <TextField {...props} />}
    </Fragment>
  );
}

export default function Home() {
  let text: string = "Angular";
  const [value, setValue] = useState("Angular");

  function handleClick(value: string) {
    setValue(value);
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, minWidth: "100%" }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}>
            <Input placeholder="text" />
            <Input richText placeholder="textarea" rows={4}/>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}></Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
