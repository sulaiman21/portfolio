import { LayoutComponent } from "@/layouts";
import "@/styles/globals.css";
import createEmotionCache from "@/theme/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "@/theme";

const clientSideCache = createEmotionCache();
type NextComponentLayout = NextComponentType & {
  layout: LayoutComponent;
};

interface AppMainProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextComponentLayout;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideCache,
}: AppMainProps) {
  const Layout: LayoutComponent =
    Component.layout || (({ children }) => children);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
