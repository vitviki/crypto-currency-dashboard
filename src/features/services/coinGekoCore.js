import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinGekoCoreAPI = createApi({
  reducerPath: "coinGekoCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_COINGEKO_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "x-cg-demo-api-key",
        import.meta.env.VITE_REACT_APP_COINKGEKO_API_KEY
      );
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
