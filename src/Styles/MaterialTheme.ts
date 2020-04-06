import { createMuiTheme } from "@material-ui/core";
import { PRIAMRY_COLOR } from "./Theme";

export const materialTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 14,
  },
  palette: {
    primary: {
      main: PRIAMRY_COLOR,
    },
  },
  overrides: {
    MuiMenuItem: {
      root: {
        minHeight: "35px",
        fontSize: "16px",
      },
    },
    MuiToolbar: {
      root: {
        color: "white",
      },
    },
  },
});
