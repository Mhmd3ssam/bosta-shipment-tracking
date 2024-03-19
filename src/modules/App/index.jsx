import { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Theme from "./components/Theme";
import AppContainer from "./components/AppContainer";


const Shipment = lazy(() => import("../Shipment"));

function AppRoot() {

  return (
    <Router>
      <Theme>
        <Suspense>
          <AppContainer>
            <Routes>
              <Route path="tracking-shipments/*" element={<Shipment />} />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
          </AppContainer>
        </Suspense>
      </Theme>
    </Router>
  );
}

export default AppRoot;
