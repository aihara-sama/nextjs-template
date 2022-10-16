import { Theme } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";
import { darkThemeOptions } from "./dark-theme-options";
import { lightThemeOptions } from "./light-theme-options";

interface ThemeConfig {
  responsiveFontSizes?: boolean;
  mode: "light" | "dark";
}

export const createTheme = (config: ThemeConfig): Theme => {
  const theme = createMuiTheme(
    config.mode === "dark" ? darkThemeOptions : lightThemeOptions,
    baseThemeOptions
  );

  return theme;
};
