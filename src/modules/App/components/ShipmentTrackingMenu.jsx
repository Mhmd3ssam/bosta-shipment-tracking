import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CardContent, Grid, Typography } from "@mui/material";

import Menu from "../../../shared/components/Menu";
import SearchInput from "../../../shared/components/SearchInput";

function ShipmentTrackingMenu() {
  const { t } = useTranslation("app");
  const navigate = useNavigate();

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
          fontWeight: "bold",
        },
      }}
    >
      <CardContent>
        <Grid container direction="column" gap={1} width="300px" p={1}>
          <Grid item>
            <Typography component="h6" variant="subtitle1">
              {t("trackYourShipment")}
            </Typography>
          </Grid>
          <Grid item>
            <SearchInput
              onEnterPressed={(shipmentNumber) => {
                navigate(`/tracking-shipments/${shipmentNumber}`);
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
