import { useTranslation } from "react-i18next";

import { Grid, Typography } from "@mui/material";

import ShipmentAdress from "./ShipmentAdress";
import ShipmenetDetailsTable from "./ShipmenetDetailsTable";

function ShipmentDetails({ shipment }) {
  const { t } = useTranslation("shipment");
  return (
    <Grid container direction="column" gap={1}>
      <Grid item container justifyContent="space-between" alignItems="center" gap={1}>
        <Grid item xs={8}>
          <Typography component="h6" variant="subtitle1" color="#28304b">
            {t("shipmentDetails")}
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="flex-start">
          <Typography component="h6" variant="subtitle1" color="#28304b">
            {t("shipmentAdress")}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-between"
        gap={1}
      >
        <Grid item xs={8}>
          <ShipmenetDetailsTable shipment={shipment} />
        </Grid>
        <Grid item xs={3}>
          <ShipmentAdress shipment={shipment} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ShipmentDetails;
