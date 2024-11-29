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

const Page = () => {
  const { checkoutId, cartGroup } = useCart();

  console.log(checkoutId);
  console.log(cartGroup);

  if (!cartGroup) {
    return (
      <AlternativePage title="your cart is empty" button="Shop now" path="/" />
    );
  }

  return <section className="py-12"></section>;
};

export default Page;
