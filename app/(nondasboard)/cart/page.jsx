"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useCart } from "@/provider/CartProvider";
import React, { useState, useEffect } from "react";
import SectionHead from "@/components/common/SectionHead";
import PageLoading from "@/components/common/PageLoading";
import QuantityElement from "@/components/element/QuantityElement";
import ButtonElement from "@/components/element/ButtonElement";

const Page = () => {
  const [groupedCart, setGroupedCart] = useState({});
  const { handleDecrease, handleIncrease, handleDelete } = useCart();
  const { cart, loading } = useSelector((state) => state.cart || { cart: [] });

  const groupCartItem = () => {
    const sorted = cart.reduce((acc, curr) => {
      if (!acc[curr.storeName]) {
        acc[curr.storeName] = [];
      }
      acc[curr.storeName].push(curr);
      return acc;
    }, {});
    setGroupedCart(sorted);
  };

  useEffect(() => {
    if (cart?.length) {
      groupCartItem();
    }
  }, [cart]);

  if (!groupedCart || Object.keys(groupedCart).length === 0) {
    return <PageLoading />;
  }

  return (
    <section className="py-12">
      <div className="cart-margin">
        <SectionHead title="Your Cart" />
        <div className="flex flex-wrap">
          {/* Shopping cart */}
          <div className=" cart-shopping-detail">
            <div className="space-y-2">
              <div className="cart-detail-head">
                <input type="checkbox" className="w-5 h-5" />
                <div>Select All</div>
              </div>
              {Object.entries(groupedCart).map(([storeName, products]) => (
                <div className="py-2 px-4 borders space-y-4" key={storeName}>
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" className="w-5 h-5" />
                    <div>{storeName}</div>
                  </div>
                  {products.map((item) => (
                    <div
                      className="flex flex-row w-full space-x-4 "
                      key={item.id}
                    >
                      <div>
                        <input type="checkbox" className="w-5 h-5" />
                      </div>
                      <Image
                        width={130}
                        height={130}
                        src={item.images}
                        className="borders"
                        alt={`Image of ${item.name}`}
                      />

                      <div className="w-full">
                        <div className="text-md font-semibold">{item.name}</div>
                        <div className="text-end">Rp. {item.price}</div>
                        <div className="flex items-center justify-end space-x-4">
                          <ButtonElement
                            title={<FaTrashAlt />}
                            style="block"
                            value={item.id}
                            loading={loading}
                            handleClick={handleDelete}
                            variant="primary"
                          />

                          <QuantityElement
                            name="update"
                            value={item.id}
                            handleIncrease={handleIncrease}
                            handleDecrease={handleDecrease}
                            quantity={item.quantity}
                            stock={item.stock}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Shopping summary */}
          <div className="  cart-shopping-summary">
            <div className="borders h-[200px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
