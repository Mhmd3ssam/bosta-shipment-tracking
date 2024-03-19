import { Routes, Route, useParams } from "react-router-dom";

import Shipment from "./views/Shipment";
import NotFound from "../../shared/views/NotFound";

function ShipmentRoot() {
  return (
    <Routes>
      <Route path="/:shipmentNumber" element={<Shipment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ShipmentRoot;
