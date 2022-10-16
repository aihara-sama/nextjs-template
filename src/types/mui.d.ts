import { PaletteColorOptions as MuiPaletteColorOptions } from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    "navbar-item": TypographyStyleOptions;
  }

  interface TypographyVariantsOptions {
    "navbar-item"?: TypographyStyleOptions;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "navbar-item": true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    red: MuiPaletteColorOptions;
  }

  interface PaletteOptions {
    red: MuiPaletteColorOptions;
  }
}
