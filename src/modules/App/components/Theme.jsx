import { useEffect, useMemo } from "react";

import { appSelector } from "../state";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { HelmetProvider, Helmet } from "react-helmet-async";

import makeTheme from "../../../helpers/makeTheme";
import { LANGS, LANGS_DIRS, I18N_MAP } from "../../../helpers/constants";

function Theme({ children }) {
  const { i18n } = useTranslation();

  const { language: lang } = useSelector(appSelector);

  useEffect(() => {
    i18n.changeLanguage(I18N_MAP[lang]);
  }, [lang, i18n]);

  const theme = useMemo(() => makeTheme({ lang }), [lang]);
  const cache = useMemo(() => {
    return lang === LANGS.ar
      ? createCache({ key: "css-rtl", stylisPlugins: [prefixer, rtlPlugin] })
      : createCache({ key: "css" });
  }, [lang]);

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ dir: LANGS_DIRS[lang], lang: I18N_MAP[lang] }}>
        {lang === LANGS.ar && (
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
            rel="stylesheet"
          ></link>
        )}
      </Helmet>

      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </CacheProvider>
    </HelmetProvider>
  );
}

export default Theme;
