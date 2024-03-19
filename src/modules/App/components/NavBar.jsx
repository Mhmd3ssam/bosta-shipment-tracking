import { appSelector } from "../state";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Grid, Typography, Box } from "@mui/material";

import LanguagesMenu from "./LanguagesMenu";
import ShipmentTrackingMenu from "./ShipmentTrackingMenu";

import brandLogoEn from "../../../assets/logo/logo-en.svg";
import brandLogoAr from "../../../assets/logo/logo-ar.svg";

function NavBar() {
  const { t } = useTranslation("app");
  const { language } = useSelector(appSelector);

  return (
    <Grid
      container
      display="grid"
      gridTemplateColumns="1fr 2fr 1fr"
      width="90vmax"
      margin="auto"
      padding="1rem"
      gap={4}
    >
      <Grid item>
        <Box
          component="img"
          alt="bosta"
          src={language === "ar" ? brandLogoAr : brandLogoEn}
          display="block"
          height={34}
        />
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" gap={3}>
        <Grid item>
          <Typography
            component="h6"
            variant="body1"
            fontWeight="bold"
            color="#28304a"
            sx={{ cursor: "pointer" }}
          >
            {t("mainPage")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="h6"
            variant="body1"
            fontWeight="bold"
            color="#28304a"
            sx={{ cursor: "pointer" }}
          >
            {t("prices")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="h6"
            variant="body1"
            fontWeight="bold"
            color="#28304a"
            sx={{ cursor: "pointer" }}
          >
            {t("sales")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <ShipmentTrackingMenu />
        </Grid>
        <Grid item>
          <Typography
            component="h6"
            variant="body1"
            fontWeight="bold"
            color="#28304a"
            sx={{ cursor: "pointer" }}
          >
            {t("register")}
          </Typography>
        </Grid>
        <Grid item>
          <LanguagesMenu />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;
