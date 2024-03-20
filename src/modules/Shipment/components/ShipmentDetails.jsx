import { useTranslation } from "react-i18next";

import { Grid, Typography } from "@mui/material";

import ShipmenetDetailsTable from "./ShipmenetDetailsTable";

function ShipmentDetails({ shipment }) {
  const { t } = useTranslation("shipment");
  return (
    <Grid container direction="column" gap={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography component="h6" variant="subtitle1" color="#28304b">
            {t("shipmentDetails")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h6" variant="subtitle1" color="#28304b">
            {t("shipmentAdress")}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Grid item xs={8}>
          <ShipmenetDetailsTable shipment={shipment} />
        </Grid>
        <Grid item>sss</Grid>
      </Grid>
    </Grid>
  );
}

export default ShipmentDetails;
