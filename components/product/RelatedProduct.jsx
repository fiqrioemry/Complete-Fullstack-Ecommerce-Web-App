"use client";

import React, { useEffect } from "react";
import SectionHead from "../common/SectionHead";
import ProductCard from "../common/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import ProductCardLoading from "../common/ProductCardLoading";
import { getProductByCategory } from "@/store/action/ProductAction";

const RelatedProduct = ({ category }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductByCategory(category));
  }, []);
  return (
    <section className="section-wrapper">
      <SectionHead title="recommend for you" />
      <div className="content-grid-4">
        {!products ? (
          <ProductCardLoading />
        ) : (
          <ProductCard products={products} />
        )}
      </div>
    </section>
  );
};

export default RelatedProduct;
