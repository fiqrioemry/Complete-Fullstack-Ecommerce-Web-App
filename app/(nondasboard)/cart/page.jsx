"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useCart } from "@/provider/CartProvider";
import PageLoading from "@/components/common/PageLoading";
import SectionHead from "@/components/common/SectionHead";
import ButtonElement from "@/components/element/ButtonElement";
import QuantityElement from "@/components/element/QuantityElement";
import AlternativePage from "@/components/common/AlternativePage";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
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
  const { cart, loading, loadingItem } = useSelector((state) => state.cart);

  if (loading && !cartGroup) {
    return <PageLoading />;
  }

  if (!cart) {
    return (
      <AlternativePage title="your cart is empty" button="Shop now" path="/" />
    );
  }

  return (
    <section className="page-wrapper">
      <div className="cart-margin">
        <SectionHead title="your cart" />
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
                          <h2>{item.name}</h2>
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
          <div className="shopping-sumary-margin">
            <div className="shopping-summary-wrapper">
              <div className="space-y-4">
                <h2>Shopping Summary</h2>
                <h3>Rp. {totalPrice}</h3>
              </div>

              <div>
                <Button
                  variant="primary"
                  onClick={() => router.push("/cart/shipment")}
                  className={`${
                    !checkoutId.length
                      ? "bg-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white cursor-not-allowed"
                      : ""
                  }
                  w-full`}
                  disabled={!checkoutId.length}
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
