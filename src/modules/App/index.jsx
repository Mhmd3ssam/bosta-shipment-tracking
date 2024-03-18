import { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { appSelector } from "./state";
import { useSelector } from "react-redux";

import Theme from "./components/Theme";
import NotFound from "../../shared/views/NotFound";

const Shipment = lazy(() => import("../Shipment"));

function AppRoot() {
  const { counter } = useSelector(appSelector);

  console.log("counter", counter);
  return (
    <Router>
      <Theme>
        <Routes>
          <Route path="tracking-shipments/*" element={<Shipment />} />
          <Route path="/" element={<Navigate to="/home" />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Theme>
    </Router>
  );
}

export default AppRoot;
