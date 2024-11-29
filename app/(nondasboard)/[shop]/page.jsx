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
import { MdOutlineShare } from "react-icons/md";

const Page = () => {
  const { target, handleNotif } = useGlobal();
  const { products, loading, failed } = useSelector((state) => state.product);

  if (loading) {
    return <PageLoading />;
  }

  if (failed || !products || products.length === 0) {
    return <PageNotFound />;
  }

  return (
    <section className="page-wrapper">
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
          <div className="flex space-x-2">
            <ButtonElement
              title="follow"
              name="follow"
              style="rounded-md w-[150px] h-[60px] flex-center "
              handleClick={handleNotif}
              loading={target.follow}
              variant="primary"
            />
            <ButtonElement
              title="chat"
              name="chat"
              style="rounded-md w-[150px] h-[60px] flex-center "
              handleClick={handleNotif}
              loading={target.chat}
              variant="primary"
            />
            <ButtonElement
              title={<MdOutlineShare />}
              name="share"
              style="rounded-md w-[90px] h-[60px] flex-center"
              handleClick={handleNotif}
              loading={target.share}
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
