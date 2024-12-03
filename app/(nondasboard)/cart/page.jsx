"use client";

import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "@/provider/CartProvider";
import PageLoading from "@/components/common/PageLoading";
import ButtonElement from "@/components/element/ButtonElement";
import QuantityElement from "@/components/element/QuantityElement";
import AlternativePage from "@/components/common/AlternativePage";
import formatToRupiah from "@/utils/formatCurrency";

const Page = () => {
  const router = useRouter();
  const {
    handleDecrease,
    handleIncrease,
    handleDelete,
    handleCheck,
    checkoutId,
  } = useCart();
  const { cart, loading, loadingItem } = useSelector((state) => state.cart);

  function isAllCartSelected() {
    return Object.values(cart)
      .flat()
      .map((item) => item.id)
      .every((item) => checkoutId.includes(item));
  }

  function countTotalPrice() {
    const data = Object.values(cart)
      .flat()
      .filter((item) => checkoutId.includes(item.id))
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    const total = formatToRupiah(data);
    return total;
  }

  if (loading) return <PageLoading />;

  if (!cart)
    return (
      <AlternativePage title="your cart is empty" button="Shop now" path="/" />
    );

  return (
    <section className="page-wrapper">
      <div className="section-wrapper">
        <div className="section-head">
          <div className="w-2 h-10 bg-primary"></div>
          <h2 className="capitalize">your cart</h2>
        </div>

        <div className="section-body">
          <div className="display-grid">
            {/* Shopping cart */}
            <div className="display-70">
              <div className="content-wrapper">
                <div className="content-box borders">
                  <div className="display-box">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleCheck(
                          Object.values(cart)
                            .flat()
                            .map((item) => item.id)
                        )
                      }
                      checked={isAllCartSelected()}
                      className="w-5 h-5"
                    />
                    <h2>Select All</h2>
                  </div>
                </div>
                <div className="content-wrapper">
                  {Object.entries(cart).map(([storeName, products]) => {
                    const groupIds = products.map((item) => item.id);
                    return (
                      <div className="content-wrapper borders" key={storeName}>
                        <div className="content-box">
                          <div className="display-box">
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
                        </div>
                        {products.map((item) => (
                          <div className="content-box" key={item.id}>
                            <div>
                              <input
                                type="checkbox"
                                className="w-5 h-5"
                                onChange={() => handleCheck([item.id])}
                                checked={checkoutId.includes(item.id)} // Perbaikan di sini
                              />
                            </div>

                            <div>
                              <Image
                                width={130}
                                height={130}
                                src={item.images}
                                className="borders"
                                alt={`Image of ${item.name}`}
                              />
                            </div>

                            <div className="content-wrapper w-full">
                              <div className="flex-center-start">
                                <h2>{item.name}</h2>
                              </div>
                              <div className="flex-center-end">
                                {formatToRupiah(item.price)}
                              </div>
                              <div className="flex-center-end">
                                <ButtonElement
                                  title={<FaTrashAlt />}
                                  loading={loadingItem === item.id}
                                  handleClick={() => handleDelete(item.id)}
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
            </div>

            {/* Shopping summary */}
            <div className="display-30">
              <div className="content-wrapper borders p-4">
                <div className="space-y-4">
                  <h2>Shopping Summary</h2>
                  <h3>{countTotalPrice()}</h3>
                </div>

                <div>
                  <ButtonElement
                    title={"purchase"}
                    className={"w-full"}
                    isButtonDisabled={!checkoutId.length}
                    handleClick={() => router.push("/cart/shipment")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
