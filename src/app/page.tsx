"use client";

import { useGetTasksQuery } from "@/lib/api/task";
import { dayJsFormat } from "@/utils/formatDate";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const TaskScheduler = () => {
  const { data } = useGetTasksQuery();

  return (
    <div className="relative flex flex-col bg-gradient-to-r from-gray-800 to-gray-600 p-4 rounded-lg max-h-[89vh] border overflow-auto">
      <div className="flex items-center gap-4 mb-4 sticky">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Button variant="contained" color="success" startIcon={<Add />}>
          New{" "}
        </Button>
      </div>

      {/* task lists */}
      {data?.map((task) => (
        <div key={task.id} className="mb-4 flex flex-col">
          <h2 className="text-lg font-semibold underline underline-offset-3">
            {task.name}
          </h2>
          <span className="text-sm text-slate-400">
            Created {dayJsFormat(task.created_at, "YYYY-DD-MM")}
          </span>
          <span className="text-sm text-slate-400">
            Deadline {dayJsFormat(task.deadline, "YYYY-DD-MM")}
          </span>
          <p className="text-sm text-slate-400">{task.remarks}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskScheduler;
