"use client";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Investment } from "../util/types";

export default function InvestmentForm({ state }: { state: Investment }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Investment>();

  const keys: (keyof Investment)[] = Object.keys(state) as (keyof Investment)[];

  return (
    <div className="user-input h-3/4 flex flex-col justify-center">
      <form>
        <Grid container spacing={5}>
          {keys.map((key, index) => (
            <Grid key={index} item xs={6}>
              <TextField {...register(key)}></TextField>
            </Grid>
          ))}
        </Grid>
      </form>
    </div>
  );
}
