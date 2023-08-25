import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { listObjectType } from "@/constants/interfaces";

type Response = listObjectType[];

export const FetchApiService = createApi({
  reducerPath: "fetchapi",
  // base url must be declared .env file
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.azki.com/api/product/" }),
  endpoints: (builder) => ({
    fetchOptions: builder.query<object[], string>({
      query: (url: string) => ({ url }),
      transformResponse: (response: { payload: object[] }) => response.payload || response,
    }),
    fetchDiscountPercents: builder.query<Response, string>({
      query: (url: string) => ({ url }),
    }),
  }),
});
export const { useFetchOptionsQuery, useFetchDiscountPercentsQuery } = FetchApiService;
