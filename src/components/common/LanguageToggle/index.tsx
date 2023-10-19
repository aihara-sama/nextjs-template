import { Button } from "@mui/material";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import { countryToFlag } from "utils/countryToFlag";

export const LanguageToggle: FunctionComponent = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~
  const toggleLanguage = () => {
    router.push({ pathname, query }, asPath, {
      locale: locale === "en" ? "ru" : "en",
    });
  };

  // ~~~~~ JSX ~~~~~
  return (
    <Button
      variant="text"
      onClick={toggleLanguage}
      sx={{ p: 0, minWidth: 32, fontSize: 16 }}
    >
      {locale === "en" ? countryToFlag("US") : countryToFlag("RU")}
    </Button>
  );
};
