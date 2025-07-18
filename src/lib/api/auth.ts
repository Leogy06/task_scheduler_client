import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryUrl from "../baseQueryUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    checkToken: builder.query({
      query: () => "/auth/checkValidity",
    }),
  }),
});

export const { useLoginMutation, useLazyCheckTokenQuery } = authApi;
