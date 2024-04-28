import { Theme, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const ticTckToeTheme = createTheme({
  ...theme,
  palette: {
    primary: { main: "#fcd256" },
  },
});

const investmentTheme = createTheme({
  ...theme,
  palette: {
    primary: { main: "#186a5e" },
  },
});

export const appThemes: { [key: string]: Theme } = {
  ticTacToe: ticTckToeTheme,
  projectManaging: theme,
  investment: investmentTheme,
  countdown: investmentTheme,
};

export default theme;
