"use client";

import { getTypedKeys, toTitleCase } from "@/lib/utils";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { InvestmentData } from "../util/types";

interface InvestmentFormProps {
  state: InvestmentData;
  change: (key: keyof InvestmentData, value: unknown) => void;
}

export default function InvestmentForm({ state, change }: InvestmentFormProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<InvestmentData>();

  const keys: (keyof InvestmentData)[] = getTypedKeys(state);

  function onSubmit<SubmitHandler>(data: InvestmentData) {
    console.log(data);
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const { value, name } = target;
    change(name as keyof InvestmentData, value);
  }

  return (
    <form
      className="user-input h-full flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        {keys.map((key, index) => (
          <Grid key={index} item xs={6}>
            <label>{toTitleCase(key)}</label>
            <TextField
        
              {...register(key, {
                onChange: (e) => onChange(e),
                required: true,
              })}
              type="number"></TextField>
          </Grid>
        ))}
      </Grid>
    </form>
  );
}
