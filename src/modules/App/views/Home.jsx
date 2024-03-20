import { Button, Typography, Container, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("app");

  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        height: "90vh",
        alignItems: "center",
        background: "linear-gradient(to top, #f1f9fa, white)",
      }}
    >
      <Box sx={{ flex: 1, weidth: "40%" }}>
        <Typography
          sx={{
            fontSize: "50px",
            lineHeight: "69px",
            color: "#111619",
          }}
        >
          {t("homeHeading")}
        </Typography>
        <Typography component="h6" variant="body2" mt={2}>
          {t("homeSubHeading")}
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }}>
          {t("startNow")}
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
