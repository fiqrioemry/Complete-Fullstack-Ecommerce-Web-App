import React from "react";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityElement = () => {
  return (
    <div className="py-2">
      <div className="flex">
        <Button variant="primary">
          <FaMinus />
        </Button>
        <div className="w-[75px] flex-center borders-tb">1</div>
        <Button variant="primary">
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default QuantityElement;
