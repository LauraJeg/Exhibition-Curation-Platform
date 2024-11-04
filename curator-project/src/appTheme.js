import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
            contained: {
                fontSize: '0.875rem'
            },
        },
      },
    },
    palette: {
        main: '565656'
    }
  });