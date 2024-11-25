"use client";
import React from "react";
import SectionHead from "../common/SectionHead";
import ProductCard from "../common/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "@/store/action/ProductAction";

const RelatedProduct = ({ relatedProducts }) => {
  return (
    <div className="space-y-4">
      <SectionHead title="related product" />
      <div className="content-grid">
        {relatedProducts.length !== 0 && (
          <ProductCard products={relatedProducts} />
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
