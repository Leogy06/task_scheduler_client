import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryUrl from "../baseQueryUrl";

type IncomeTypes = {
  id: number;
  user_id: number;
  source: string;
  amount: number;
  date: string;
  notes: string;
};

export const incomeApi = createApi({
  reducerPath: "incomeApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Income"],
  endpoints: (builder) => ({
    getIncome: builder.query<IncomeTypes[], void>({
      query: () => "/incomes/get",
      providesTags: ["Income"],
    }),
  }),
});

export const { useGetIncomeQuery } = incomeApi;
