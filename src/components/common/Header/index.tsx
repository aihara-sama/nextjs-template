import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Hidden, IconButton } from "@mui/material";
import { LanguageToggle } from "components/common/LanguageToggle";
import Logo from "components/common/Logo";
import MobileNavbarDrawer from "components/common/MobileNavbarDrawer";
import { ThemeToggle } from "components/common/ThemeToggle";
import { useState } from "react";

export const Header = () => {
  const [isMobileNavbarDrawerOpen, setIsMobileNavbarDrawerOpen] =
    useState<boolean>(false);

  return (
    <Box
      component="header"
      sx={{
        height: 60,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: "appBar",
        bgcolor: "background.default",
      }}
    >
      <Logo />
      <Box display="flex" alignItems="center">
        <LanguageToggle />
        <ThemeToggle />
        <Hidden smUp>
          <IconButton
            onClick={() => setIsMobileNavbarDrawerOpen((prev) => !prev)}
          >
            {!isMobileNavbarDrawerOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </IconButton>
        </Hidden>
      </Box>
      <MobileNavbarDrawer
        isDrawer={isMobileNavbarDrawerOpen}
        setIsDrawer={setIsMobileNavbarDrawerOpen}
      />
    </Box>
  );
};
