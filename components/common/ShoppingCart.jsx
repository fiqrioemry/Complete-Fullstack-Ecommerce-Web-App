import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";
import ImageElement from "../element/ImageElement";

const ShoppingCart = ({ user }) => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer">
          <MdShoppingCart className="text-4xl" />
          {cart && (
            <div className="absolute  -top-2 -right-4 rounded-full h-8 w-8 flex-center bg-red-500 text-white">
              {Math.min(cart.length, 99)}
            </div>
          )}
        </div>
      </PopoverTrigger>
      {!user ? (
        <PopoverContent className="w-80 bg-background">
          <div className="h-[250px] flex-center">
            CART EMPTY (USER NOT LOGIN)
          </div>
        </PopoverContent>
      ) : !cart ? (
        <PopoverContent className="w-[350px] bg-background">
          <div className="h-[250px] flex-center">
            CART IS EMPTY (USER LOGIN)
          </div>
        </PopoverContent>
      ) : (
        <PopoverContent className="w-[350px] bg-background">
          <div className="h-[275px] overflow-hidden">
            <div className=" borders-b">
              <div className=" flex-between py-2 px-2">
                <h4>Shopping Cart</h4>
                {/* // TODO : Popover stay open when changing path */}
                <Link href="/cart">see detail</Link>
              </div>
            </div>
            <div className="px-2 h-[220px] overflow-y-scroll">
              {cart.map((item, index) => (
                <div className="flex py-2 space-x-4" key={index}>
                  <ImageElement
                    width={80}
                    height={80}
                    path={item.images}
                    style="borders"
                    alt="cartimage"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <div>
                      {item.quantity} x Rp. {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default ShoppingCart;
