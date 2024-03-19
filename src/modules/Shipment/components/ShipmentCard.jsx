import { Grid, Card, CardContent, Divider } from "@mui/material";

import ShipmentStatus from "./ShipmentStatus";
import ShipmentStiper from "./ShipmentStiper";

function ShipmentCard({ shipment }) {
  return (
    <Card sx={{ display: "flex", borderRadius: "10px" }} variant="outlined">
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Grid flexDirection="column" gap={2}>
          <Grid item>
            <ShipmentStatus shipment={shipment} />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item mt={3}>
            <ShipmentStiper shipment={shipment} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ShipmentCard;
