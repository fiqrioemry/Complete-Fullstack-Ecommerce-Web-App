"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "@/provider/CartProvider";
import React from "react";
import SectionHead from "@/components/common/SectionHead";
import PageLoading from "@/components/common/PageLoading";
import QuantityElement from "@/components/element/QuantityElement";
import ButtonElement from "@/components/element/ButtonElement";
import { Button } from "@/components/ui/button";

const Page = () => {
  const {
    handleDecrease,
    handleIncrease,
    handleDelete,
    handleCheck,
    checkoutId,
    cartGroup,
    cartIds,
    totalPrice,
  } = useCart();
  const { loadingItem } = useSelector((state) => state.cart);

  if (!cartGroup || Object.keys(cartGroup).length === 0) {
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
                <input
                  type="checkbox"
                  onChange={() => handleCheck(cartIds)}
                  checked={cartIds.every((item) => checkoutId.includes(item))}
                  className="w-5 h-5"
                />
                <h2>Select All</h2>
              </div>
              {Object.entries(cartGroup).map(([storeName, products]) => {
                const groupIds = products.map((item) => item.id);
                return (
                  <div className="py-2 px-4 borders space-y-4" key={storeName}>
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        onChange={() => handleCheck(groupIds)}
                        checked={groupIds.every((item) =>
                          checkoutId.includes(item)
                        )}
                      />
                      <div>{storeName}</div>
                    </div>
                    {products.map((item) => (
                      <div
                        className="flex flex-row w-full space-x-4 "
                        key={item.id}
                      >
                        <div>
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            onChange={() => handleCheck([item.id])}
                            checked={checkoutId.includes(item.id)} // Perbaikan di sini
                          />
                        </div>
                        <Image
                          width={130}
                          height={130}
                          src={item.images}
                          className="borders"
                          alt={`Image of ${item.name}`}
                        />
                        <div className="w-full">
                          <div className="text-md font-semibold">
                            {item.name}
                          </div>
                          <div className="text-end">Rp. {item.price}</div>
                          <div className="flex items-center justify-end space-x-4">
                            <ButtonElement
                              title={<FaTrashAlt />}
                              style="block text-sm"
                              loading={loadingItem === item.id}
                              handleClick={() => handleDelete(item.id)}
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
                );
              })}
            </div>
          </div>

          {/* Shopping summary */}
          <div className="cart-shopping-summary">
            <div className="borders flex flex-col justify-between h-[200px] px-4 py-4">
              <div className="space-y-4">
                <h2>Shopping Summary</h2>
                <h3>Rp. {totalPrice}</h3>
              </div>

              <div>
                <Button
                  variant="primary"
                  className={`${
                    checkoutId.length === 0
                      ? "bg-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white cursor-not-allowed"
                      : ""
                  }
                  w-full`}
                  disabled={checkoutId.length === 0}
                >
                  Make a Purchase
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
