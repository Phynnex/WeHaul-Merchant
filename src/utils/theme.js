import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#113E82",
      dark: "#1C2453 ",
      light: "#3895D3",
    },
    yellow: {
      main: "#FFBB00",
      dark: "#F2A007",
      light: "#F2D399",  
    },
    secondary: {
      main: "#F3402B",
      dark: "#aa2c1e",
      light: "#f56655",
    },
    green: {
      main: "#40D192",
      dark: "#2c9266",
      light: "#66daa7",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default theme;
