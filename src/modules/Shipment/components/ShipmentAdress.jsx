import { useTranslation } from "react-i18next";

import { Grid, Card, CardContent, Button, Typography } from "@mui/material";

function ShipmentAdress({ shipment }) {
  const { t } = useTranslation("shipment");

  return (
    <Grid container direction="column" gap={3} my={2} width="100%">
      <Grid item>
        <Card
          sx={{ display: "flex", borderRadius: "10px", bgcolor: "#fafbfa" }}
          variant="outlined"
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="h6" variant="subtitle1" color="#232b47">
              {shipment?.adress || t("addressNotFound")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ display: "flex", borderRadius: "10px" }} variant="outlined">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Grid container direction="column" gap={2}>
              <Grid item>
                <Typography component="h6" variant="body2">
                  {t("subportMessage")}
                </Typography>
              </Grid>
              <Grid item>
                <Button>
                  <Typography component="span" variant="caption">
                    {t("subportAction")}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ShipmentAdress;
