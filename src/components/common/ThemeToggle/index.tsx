import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "slices/app.slice";
import type { RootState } from "store";
import type { ThemeType } from "theme";

export const ThemeToggle = () => {
  // ~~~~~ Redux state ~~~~~
  const theme = useSelector((state: RootState) => state.app.theme);

  // ~~~~~ Hooks ~~~~~
  const dispatch = useDispatch();

  // ~~~~~ Cmp state ~~~~~
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~
  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  // ~~~~~ Handlers ~~~~~
  const toggleTheme = () =>
    dispatch(appSlice.actions.setTheme(theme === "light" ? "dark" : "light"));

  // ~~~~~ JSX ~~~~~
  return (
    <IconButton onClick={toggleTheme}>
      {currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
