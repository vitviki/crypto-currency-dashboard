import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinGekoCoreAPI = createApi({
  reducerPath: "coinGekoCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
    prepareHeaders: (headers) => {
      headers.set("x-cg-demo-api-key", "CG-eioKEvcS2ta7uNeWJPgbs9t2");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query({
      query: () => {
        return {
          url: "/simple/supported_vs_currencies",
        };
      },
    }),
    getCoinsByMarketCap: builder.query({
      query: (params) => {
        return {
          url: "/coins/markets",
          params,
        };
      },
    }),
    getSearchResults: builder.query({
      query: (params) => {
        return {
          url: "/search",
          params,
        };
      },
    }),
    getCoinDataByDays: builder.query({
      query: (params) => {
        return {
          url: `/coins/${params.id}/market_chart`,
          params,
        };
      },
    }),
  }),
});

export const {
  useGetAllCurrenciesQuery,
  useGetCoinsByMarketCapQuery,
  useGetSearchResultsQuery,
  useGetCoinDataByDaysQuery,
} = coinGekoCoreAPI;
