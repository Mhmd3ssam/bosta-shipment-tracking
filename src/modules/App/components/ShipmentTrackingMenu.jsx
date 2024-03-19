import { useState } from "react";

import { useTranslation } from "react-i18next";

import { CardContent, Grid, Typography } from "@mui/material";

import Menu from "../../../shared/components/Menu";
import SearchInput from "../../../shared/components/SearchInput";

function ShipmentTrackingMenu() {
  const { t } = useTranslation("app");

  const [shipmentNumber, setShipmentNumber] = useState();
  return (
    <Menu
      label="Shipment Tracking Menu"
      AnchorComponent={Typography}
      AnchorComponentProps={{
        size: "small",
        variant: "text",
        children: t("trackShipment"),
        sx: {
          "&:hover": {
            cursor: "pointer",
          },
        },
      }}
    >
      <CardContent>
        <Grid container direction="column" gap={1} width="300px" p={1}>
          <Grid item>
            <Typography variant="subtitle1">
              {t("trackYourShipment")}
            </Typography>
          </Grid>
          <Grid item>
            <SearchInput
              value={shipmentNumber}
              onChange={(val) => {
                setShipmentNumber(val);
              }}
              label={t("trackShipment")}
              placeholder={t("shipmenNumber")}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Menu>
  );
}

export default ShipmentTrackingMenu;
