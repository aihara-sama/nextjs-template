import { ThemeOptions } from "@mui/material";

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1080,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({}),
      },
      variants: [
        {
          props: { variant: "navbar-item" },
          style: ({ theme }) => ({}),
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides(theme) {
        return {
          "html, body": {
            height: "100%",
          },
          img: {
            maxWidth: "100%",
          },
        };
      },
    },
  },
};
