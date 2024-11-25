"use client";
import React from "react";
import SectionHead from "../common/SectionHead";
import ProductCard from "../common/ProductCard";

const RelatedProduct = ({ relatedProducts }) => {
  return (
    <div className="space-y-4">
      <SectionHead title="related product" />
      <div className="content-grid">
        <ProductCard products={relatedProducts} />
      </div>
    </div>
  );
};

export default RelatedProduct;
