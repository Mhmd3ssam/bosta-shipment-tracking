import { useGetShipmensQuery } from "../../../redux/services/shipment";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Grid } from "@mui/material";

import ShipmentCard from "../components/ShipmentCard";
import ShipmentDetails from "../components/ShipmentDetails";

import Loader from "../../../shared/components/Loader";
import SeverError from "../../../shared/views/SeverError";

function Shipment() {
  const { t } = useTranslation("shipment");
  const { shipmentNumber } = useParams();

  const {
    isLoading,
    isError,
    data: shipment,
  } = useGetShipmensQuery(shipmentNumber);

  if (isLoading) return <Loader />;
  if (isError) return <SeverError message={t("serverErrorMessage")} />;
  return (
    <Grid container direction="column" gap={5}>
      <Grid item width="85%" m="auto">
        <ShipmentCard shipment={shipment} />
      </Grid>
      <Grid item width="85%" m="auto">
        <ShipmentDetails shipment={shipment}/>
      </Grid>
    </Grid>
  );
}

export default Shipment;
