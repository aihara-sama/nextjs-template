import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Hidden, IconButton } from "@mui/material";
import { LanguageToggle } from "components/common/LanguageToggle";
import Logo from "components/common/Logo";
import NavDrawer from "components/common/NavDrawer";
import { ThemeToggle } from "components/common/ThemeToggle";
import type { FunctionComponent } from "react";
import { useState } from "react";

export const Header: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState<boolean>(false);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Logo />
      <Box display="flex" alignItems="center">
        <LanguageToggle />
        <ThemeToggle />
        <Hidden smUp>
          <IconButton onClick={() => setIsNavDrawerOpen((prev) => !prev)}>
            {!isNavDrawerOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </IconButton>
        </Hidden>
      </Box>
      <NavDrawer isDrawer={isNavDrawerOpen} setIsDrawer={setIsNavDrawerOpen} />
    </Box>
  );
};
