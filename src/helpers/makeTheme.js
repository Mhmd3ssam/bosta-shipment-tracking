import { createTheme } from "@mui/material/styles";
import { arEG, enUS } from "@mui/material/locale";

import { LANGS, LANGS_DIRS, LANGS_FONTS } from "./constants";

const localesMap = {
  [LANGS.ar]: arEG,
  [LANGS.en]: enUS,
};

function makeTheme({ lang }) {
  return createTheme(
    {
      direction: LANGS_DIRS[lang],
      typography: {
        fontFamily: `${LANGS_FONTS[lang]}, Helvetica, Arial, sans-serif`,
        h5: {
          fontWeight: 500,
        },
        subtitle1: {
          fontWeight: 500,
        },
      },
      palette: {
        primary: {
          main: "#e20714",
        },
        primaryBg: "#f3fafb",
        secondary: {
          main: "#FFA303",
        },
        text: {
          primary: "#e30613",
          secondary: "#111619",
        },
        success: {
          main: "#29BF56",
        },
        error: {
          main: "#FC2424",
        },
        action: {
          disabled: "#D5D9E5",
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            #root {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `,
        },
        MuiButton: {
          defaultProps: {
            size: "large",
            color: "primary",
            variant: "contained",
            disableElevation: true,
          },
        },
      },
    },
    localesMap[lang]
  );
}

export default makeTheme;
