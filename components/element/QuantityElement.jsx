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
    <div className="flex">
      <Button
        className={`${quantity === 1 ? "cursor-not-allowed" : ""} block `}
        onClick={handleDecrease}
        name={name}
        value={value}
        variant="primary"
        disabled={quantity === 1}
      >
        <FaMinus className="pointer-events-none" />
      </Button>
      <div className="w-[75px] flex-center borders-tb">{quantity}</div>
      <Button
        onClick={handleIncrease}
        className={`${quantity === stock ? "cursor-not-allowed" : ""} block `}
        name={name}
        value={value}
        variant="primary"
        disabled={quantity === stock}
      >
        <FaPlus className="pointer-events-none" />
      </Button>
    </div>
  );
};

export default QuantityElement;
