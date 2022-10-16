import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SettingsConsumer, SettingsProvider } from "contexts/settings";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";
import { createTheme } from "theme";
import { createEmotionCache } from "utils/create-emotion-cache";
type EnhancedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const App: FC<EnhancedAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <ReduxProvider store={store}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => (
              <ThemeProvider
                theme={createTheme({
                  responsiveFontSizes: settings.responsiveFontSizes,
                  mode: settings.theme,
                })}
              >
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            )}
          </SettingsConsumer>
        </SettingsProvider>
      </ReduxProvider>
    </CacheProvider>
  );
};

export default App;
