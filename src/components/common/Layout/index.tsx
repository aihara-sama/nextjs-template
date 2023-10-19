import { Box, Container } from "@mui/material";
import type { FunctionComponent, ReactNode } from "react";
import { Header } from "../Header";

interface IProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<IProps> = ({ children }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <>
      <Header />
      <Box component="main">
        <Container>{children}</Container>
      </Box>
    </>
  );
};
