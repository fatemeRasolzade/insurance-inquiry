import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FetchApiService = createApi({
  reducerPath: "fetchapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.azki.com/api/product/" }),
  endpoints: (builder) => ({
    fetchOptions: builder.query<object[], string>({
      query: (url: string) => ({ url: url }),
      transformResponse: (response: { payload: object[] }) => response.payload || response,
    }),
  }),
});
export const { useFetchOptionsQuery } = FetchApiService;
