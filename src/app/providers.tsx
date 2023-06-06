"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    h1: { fontSize: "3rem" },
    h2: { fontSize: "2rem" },
  },
});
const emotionCache = createCache({ key: "css", prepend: true });

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default Providers;
