import { AttachMoney } from "@mui/icons-material";
import React from "react";

type CardsType = {
  income: number;
};

const Cards = ({ income }: CardsType) => {
  return (
    // <!-- From Uiverse.io by jubayer-10 -->
    <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
      </div>
      <div className="fill-violet-500 w-12">
        <AttachMoney />
      </div>
      <h1 className="font-bold text-xl">Income</h1>
      <p className="text-sm text-zinc-500 leading-6">{income}</p>
    </div>
  );
};

export default Cards;
