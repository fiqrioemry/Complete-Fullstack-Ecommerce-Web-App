"use client";
import ProductCard from "@/components/common/ProductCard";
import ProductCardLoading from "@/components/common/ProductCardLoading";
import FilterProducts from "@/components/search/FilterProducts";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/provider/ProductProvider";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { handleSearch } = useProduct();
  const { products, loading, detail } = useSelector((state) => state.product);

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

            <div className="display-70 flex justify-between">
              <div className="content-wrapper">
                <div className="flex-center p-4 borders">SORT BY</div>
                <div className="content-grid-4">
                  {loading ? (
                    <ProductCardLoading />
                  ) : (
                    <ProductCard products={products} />
                  )}
                </div>
              </div>
              {!loading && (
                <div className="space-x-2">
                  {[...Array(detail.totalPage)].map((_, index) => (
                    <Button
                      name="page"
                      value={index + 1}
                      disabled={detail.currentPage === index + 1}
                      onClick={handleSearch}
                      variant="primary"
                      className={`${
                        detail.currentPage === index + 1
                          ? "bg-white text-primary"
                          : ""
                      }`}
                      key={index}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
