import { lazy } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Theme from "./components/Theme";
import AppContainer from "./components/AppContainer";

import NotFound from "../../shared/views/NotFound";

const Shipment = lazy(() => import("../Shipment"));

function AppRoot() {

  return (
    <Router>
      <Theme>
        <AppContainer>
          <Routes>
            <Route path="tracking-shipments/*" element={<Shipment />} />
            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </AppContainer>
      </Theme>
    </Router>
  );
}

export default AppRoot;
