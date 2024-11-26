import React from "react";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityElement = ({
  handleIncrease,
  handleDecrease,
  quantity,
  stock,
}) => {
  return (
    <div className="flex">
      <Button
        className={quantity === 1 ? "cursor-not-allowed" : ""}
        onClick={handleDecrease}
        variant="primary"
        disabled={quantity === 1}
      >
        <FaMinus />
      </Button>
      <div className="w-[75px] flex-center borders-tb">{quantity}</div>
      <Button
        onClick={handleIncrease}
        className={quantity === stock ? "cursor-not-allowed" : ""}
        variant="primary"
        disabled={quantity === stock}
      >
        <FaPlus />
      </Button>
    </div>
  );
};

export default QuantityElement;
