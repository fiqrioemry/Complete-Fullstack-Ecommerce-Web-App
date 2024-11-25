import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdShoppingCart } from "react-icons/md";

const ShoppingCart = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MdShoppingCart className="text-4xl cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-background">
        <div className="h-[250px] flex-center">CART EMPTY</div>
      </PopoverContent>
    </Popover>
  );
};

export default ShoppingCart;
