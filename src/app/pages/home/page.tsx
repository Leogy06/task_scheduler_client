"use client";

import Cards from "@/components/ui/Cards";
import { useGetIncomeQuery } from "@/lib/api/income";
import React from "react";

const HomePage = () => {
  const { data } = useGetIncomeQuery();

  console.log("data ", data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
      {data?.map((i) => (
        <Cards key={i.id} income={i.amount} />
      ))}
    </div>
  );
};

export default HomePage;
