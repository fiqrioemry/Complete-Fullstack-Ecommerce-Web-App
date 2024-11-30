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
    <div className="display-wrapper w-full">
      <Button
        className={`${
          quantity === 1 ? "cursor-not-allowed" : ""
        } block flex-20 `}
        onClick={handleDecrease}
        name={name}
        value={value}
        variant="primary"
        disabled={quantity === 1}
      >
        <FaMinus className="pointer-events-none" />
      </Button>
      <div className="borders-tb flex-60">{quantity}</div>
      <Button
        onClick={handleIncrease}
        className={`${
          quantity === stock ? "cursor-not-allowed" : ""
        } block flex-20 `}
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
