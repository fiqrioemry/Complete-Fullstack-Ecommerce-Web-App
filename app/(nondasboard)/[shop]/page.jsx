"use client";

import PageNotFound from "@/app/not-found";
import PageLoading from "@/components/common/PageLoading";
import ProductCard from "@/components/common/ProductCard";
import SectionHead from "@/components/common/SectionHead";
import ButtonElement from "@/components/element/ButtonElement";
import ImageElement from "@/components/element/ImageElement";
import { Button } from "@/components/ui/button";
import { useGlobal } from "@/provider/GlobalProvider";

import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { animation, handleNotif } = useGlobal();
  const { products, loading, failed } = useSelector((state) => state.product);

  if (loading) {
    return <PageLoading />;
  }

  if (failed || !products || products.length === 0) {
    return <PageNotFound />;
  }

  return (
    <section className="py-12 mx-auto container">
      <div className="flex space-x-4 borders px-2 py-2">
        <div className="borders">
          <ImageElement
            width={200}
            height={200}
            style="w-[250px] h-[250px] flex-center"
            path={products.storeImage}
            alt="storeimage"
          />
        </div>
        <div>
          <h2>{products.storeName}</h2>
          <h3>Location : {products.storeCity}</h3>
          <p>{products.description}</p>
          <div className="space-x-2">
            <ButtonElement
              title="follow"
              style="rounded-md"
              handleClick={handleNotif}
              loading={animation}
              variant="primary"
            />
            <ButtonElement
              title="chat"
              style="rounded-md"
              handleClick={handleNotif}
              loading={animation}
              variant="primary"
            />
          </div>
        </div>
      </div>
      <div className="py-12">
        <SectionHead title="Daftar Produk Toko" />
      </div>
      <div className="content-grid">
        <ProductCard products={products.products} />
      </div>
    </section>
  );
};

export default Page;
