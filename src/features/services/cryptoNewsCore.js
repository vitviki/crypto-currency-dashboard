import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoNewsCoreAPI = createApi({
  reducerPath: "cryptoNewsCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cryptocurrency-news2.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "f4cf18c6c3msh149996a33bbe6ffp17de19jsnb7a365cd77dc"
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
