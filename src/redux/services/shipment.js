import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "../helpers/baseQuery";

export const ShipmentAPI = createApi({
  reducerPath: "ShipmentAPI",
  refetchOnReconnect: true,
  tagTypes: ["Shipment"],
  baseQuery: customBaseQuery,
  endpoints: (build) => ({
    getShipmens: build.query({
      query: (shipmentNumber) => ({
        url: `/shipments/track/${shipmentNumber}`,
      }),
      transformResponse: (res) => res,
      providesTags: ["Shipment"],
    }),
  }),
});

export const { useGetShipmensQuery } = ShipmentAPI;
