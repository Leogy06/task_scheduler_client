import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryUrl from "../baseQueryUrl";
import TaskTypes from "@/types/task";

export const taskApiSlices = createApi({
  reducerPath: "taskApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    getTasks: builder.query<TaskTypes[], void>({
      query: () => "/tasks",
    }),
  }),
});

export const { useCreateTaskMutation, useGetTasksQuery } = taskApiSlices;
