import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#5E2129',
      },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme