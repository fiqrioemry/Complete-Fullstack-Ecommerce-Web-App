import React from "react";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityElement = ({
  name = "",
  value = "",
  handleIncrease,
  handleDecrease,
  quantity,
  stock,
}) => {
  return (
    <div className="flex space-x-2">
      <Button
        name={name}
        value={value}
        onClick={handleDecrease}
        disabled={quantity === 1}
      >
        <FaMinus className="pointer-events-none" />
      </Button>
      <div className="flex-center borders rounded-md px-4 min-w-16">
        {quantity}
      </div>
      <Button
        name={name}
        value={value}
        onClick={handleIncrease}
        disabled={quantity === stock}
      >
        <FaPlus className="pointer-events-none" />
      </Button>
    </div>
  );
};

export default QuantityElement;
