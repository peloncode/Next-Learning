"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCart } from "react-icons/io5";

const WidgetsGrid = () => {
  const value = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-5">
      <SimpleWidget
        title={`${value}`}
        subtitile="Cart Shopping"
        label="Counter"
        icon={<IoCart size={60} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};

export default WidgetsGrid;
