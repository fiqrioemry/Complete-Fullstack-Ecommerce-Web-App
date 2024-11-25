"use client";

import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { storeProduct } = useSelector((state) => state.product);

  return (
    <section className="h-screen flex-center text-4xl font-medium">
      HALAMAN STORE PRODUCT
    </section>
  );
};

export default page;
