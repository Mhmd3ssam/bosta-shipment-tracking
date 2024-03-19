import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { LANGS } from "../../helpers/constants";

import { buildURLQueryParams } from "../../helpers/urls";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://tracking.bosta.co",
  prepareHeaders: (headers) => {
    const resrvedLanguage = localStorage.getItem("lang") || LANGS.en;
    headers.set("Accept-Language", resrvedLanguage);
    return headers;
  },
  paramsSerializer: buildURLQueryParams,
});

export const customBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};
