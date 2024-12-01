"use client";

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import ButtonElement from "../element/ButtonElement";
import { useProduct } from "@/provider/ProductProvider";
import ProductCardLoading from "../common/ProductCardLoading";
const Recommend = () => {
  const { handleShowMore, limit } = useProduct();
  const { products, loading, detail } = useSelector((state) => state.product);

  return (
    <section className="section-wrapper">
      <div className="section-head">
        <span className="w-2 h-10 bg-primary"></span>
        <h2 className="capitalize">recommend for you</h2>
      </div>
      <div className="section-body">
        <div className="content-grid-4">
          {!products ? (
            <ProductCardLoading />
          ) : (
            <ProductCard products={products} />
          )}

          {loading && <ProductCardLoading />}
        </div>
        {detail.totalProduct >= limit && (
          <ButtonElement
            title="load more"
            style={`${loading ? "cursor-not-allowed" : ""} w-full flex-center `}
            handleClick={handleShowMore}
            loading={loading}
          />
        )}
      </div>
    </section>
  );
};

export default Recommend;
