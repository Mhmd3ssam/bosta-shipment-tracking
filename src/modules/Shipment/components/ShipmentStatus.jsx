import { useTranslation } from "react-i18next";

import { Grid, Typography } from "@mui/material";
import { convertDateFormat } from "../../../helpers/dateTime";

import { SHIPMENT_STATUS, STATUS_COLOR_MAP } from "../../../helpers/constants";

function ShipmentStatus({
  shipment: {
    TrackingNumber,
    nextWorkingDay,
    provider,
    CurrentStatus,
    PromisedDate,
  },
}) {
  const {
    t,
    i18n: { language },
  } = useTranslation("shipment");

  const shipmentInfo = [
    {
      title: t("deliveryNumber", { deliveryNumber: TrackingNumber }),
      value: t(SHIPMENT_STATUS[CurrentStatus.state]),
      color: STATUS_COLOR_MAP[CurrentStatus.state],
    },
    {
      title: t("lastUpdated"),
      value: !nextWorkingDay
        ? "-"
        : `${t(nextWorkingDay?.[0]?.dayName)} ${nextWorkingDay?.[0]?.dayDate}`,
    },
    {
      title: t("providerName"),
      value: provider,
    },
    {
      title: t("deliveryTimeWithin"),
      value: convertDateFormat(PromisedDate, language),
    },
  ];

  return (
    <Grid container justifyContent="space-between" alignItems="center" gap={2}>
      {shipmentInfo.map((item, idx) => (
        <Grid item key={idx}>
          <Grid item mb={1}>
            <Typography
              component="h5"
              variant="subtitle2"
              color="#8993a3"
              fontWeight="bold"
            >
              {item.title}
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography
              component="h5"
              variant="body1"
              fontWeight="bold"
              color={item.color || "#232b47"}
            >
              {item.value}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShipmentStatus;
