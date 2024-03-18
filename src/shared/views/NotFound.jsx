import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Box, Grid, Typography, Button } from "@mui/material";

import notFound from "../../assets/errors/404.png";

function NotFound() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Grid
      container
      width="100vw"
      gap={2}
      flexGrow={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Box
          component="img"
          alt="not found"
          src={notFound}
          width={100}
          height={100}
        />
      </Grid>

      <Grid item>
        <Typography component="h1" variant="h5" color="error" align="center">
          {t("notFound")}
        </Typography>

        <Typography color="textSecondary" align="center">
          {t("notFoundMessage")}
        </Typography>
      </Grid>

      <Grid item>
        <Button
          size="medium"
          variant="outlined"
          sx={{
            bgcolor: "#e30613",
            color: "#fff",
            borderColor: "#e30613",
            "&:hover": {
              bgcolor: "#e30613",
              color: "#fff",
              borderColor: "#e30613",
            },
          }}
          onClick={() => navigate(-1)}
        >
          {t("goBack")}
        </Button>
      </Grid>
    </Grid>
  );
}

export default NotFound;
