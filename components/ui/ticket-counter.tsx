"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function TicketCounter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex">
      <button
        className="p-1 border bg-gray-50 hover:bg-gray-100 rounded-l disabled:cursor-not-allowed"
        onClick={() => setCount((e) => e - 1)}
        disabled={count <= 0}
      >
        <Minus size={14} />
      </button>
      <div className="py-1 w-[50px] bg-white text-center border-t border-b">
        <span>{count}</span>
      </div>
      <button
        className="p-1 border bg-gray-50 hover:bg-gray-100 rounded-r disabled:cursor-not-allowed"
        onClick={() => setCount((e) => e + 1)}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
