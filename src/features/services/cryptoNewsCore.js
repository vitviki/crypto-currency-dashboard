import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoNewsCoreAPI = createApi({
  reducerPath: "cryptoNewsCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_CRYPTO_NEWS_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        import.meta.env.VITE_REACT_APP_CRYPTO_NEW_API_KEY
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewsData: builder.query({
      query: () => {
        return {
          url: "/decrypt",
        };
      },
    }),
  }),
});

export const { useGetNewsDataQuery } = cryptoNewsCoreAPI;
