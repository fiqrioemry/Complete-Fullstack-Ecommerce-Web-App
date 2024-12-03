"use client";

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import ButtonElement from "../element/ButtonElement";
import { useProduct } from "@/provider/ProductProvider";
import ProductCardLoading from "../common/ProductCardLoading";

const Recommend = () => {
  const { handleChange, searchInput } = useProduct();
  const { products, loading, detail } = useSelector((state) => state.product);

  return (
    <section className="section-wrapper">
      <div className="section-head">
        <span className="w-2 h-10 bg-primary"></span>
        <h2 className="capitalize">recommend for you</h2>
      </div>
      <div className="section-body">
        <div className="content-grid-4">
          {!products.length ? (
            <ProductCardLoading />
          ) : (
            <ProductCard products={products} />
          )}

          {products & loading && <ProductCardLoading />}
        </div>
        {detail.totalProduct >= searchInput.limit && (
          <ButtonElement
            title="load more"
            name="limit"
            value={searchInput.limit + 4}
            className={"flex-center w-full"}
            handleClick={handleChange}
            isButtonLoading={loading}
          />
        )}
      </div>
    </section>
  );
};

export default Recommend;
