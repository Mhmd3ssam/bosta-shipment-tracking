import fallback from "./fallback"
import app from "../modules/App/locales";
import shipment from "../modules/Shipment/locales";

const resources = {
  ar: {
    fallback: fallback.ar,

    app: app.ar,
    shipment: shipment.ar,
  },
  en: {
    fallback: fallback.en,

    app: app.en,
    shipment: shipment.en,
  },
};

export default resources;
