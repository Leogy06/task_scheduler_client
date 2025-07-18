import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQueryUrl = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_BASEURL,
  credentials: "include",
});

export default baseQueryUrl;
