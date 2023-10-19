import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { FunctionComponent } from "react";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store";
import type { ThemeType } from "theme/index";
import { createTheme } from "theme/index";

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider: FunctionComponent<IProps> = ({ children }) => {
  // ~~~~~ Redux state ~~~~~
  const theme = useSelector((state: RootState) => state.app.theme);

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~
  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <MuiThemeProvider theme={createTheme(currentTheme)}>
      {children}
    </MuiThemeProvider>
  );
};
