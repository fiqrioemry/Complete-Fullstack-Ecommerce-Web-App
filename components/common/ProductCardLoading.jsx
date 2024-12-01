"use client";

import React from "react";

const ProductCardLoading = () => {
  return (
    <>
      {[...Array(4)].map((__, index) => (
        <article className="borders p-2 space-y-1 " key={index}>
          <div className="w-full h-[200px] rounded-md bg-slate-300 animate-pulse" />
          <div className="w-12 h-4 rounded-md bg-slate-300 animate-pulse" />
          <div className="w-12 h-4 rounded-md bg-slate-300 animate-pulse" />
          <div className="w-full h-12 rounded-md bg-slate-300 animate-pulse" />
        </article>
      ))}
    </>
  );
};

export default ProductCardLoading;
