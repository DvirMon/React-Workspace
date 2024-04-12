"use client";

import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { InvestmentData } from "../util/types";
import { getTypedKeys, toTitleCase } from "@/lib/utils";
import TextField from "@mui/material/TextField";

export default function InvestmentForm({ state }: { state: InvestmentData }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<InvestmentData>();

  const keys: (keyof InvestmentData)[] = getTypedKeys(state);

  return (
    <div className="user-input h-3/4 flex flex-col justify-center">
      <form>
        <Grid container spacing={5}>
          {keys.map((key, index) => (
            <Grid key={index} item xs={6}>
              <label>{toTitleCase(key)}</label>
              <TextField {...register(key)} type="number"></TextField>
            </Grid>
          ))}
        </Grid>

      </form>
    </div>
  );
}
