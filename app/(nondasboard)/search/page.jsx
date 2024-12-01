"use client";
import ProductCard from "@/components/common/ProductCard";
import FilterProducts from "@/components/search/FilterProducts";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <main className="page-wrapper">
      <section className="section-wrapper">
        <div className="section-head">
          <div className="w-2 h-10 bg-primary"></div>
          <h2 className="capitalize">Search Result</h2>
        </div>

        <div className="section-body">
          <div className="display-grid">
            {/* filterbox */}
            <div className="display-30 borders p-2 ">
              <FilterProducts />
            </div>
            {/* product search result */}

            <div className="display-70 borders p-4">
              <div className="content-grid-4">
                <ProductCard products={products} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
