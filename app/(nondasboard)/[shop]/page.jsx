"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import PageNotFound from "@/app/not-found";
import { MdOutlineShare } from "react-icons/md";
import { useGlobal } from "@/provider/GlobalProvider";
import PageLoading from "@/components/common/PageLoading";
import ProductCard from "@/components/common/ProductCard";
import ButtonElement from "@/components/element/ButtonElement";

const Page = () => {
  const { target, handleNotif } = useGlobal();
  const { products, loading, failed } = useSelector((state) => state.product);

  if (loading && products.length === 0) {
    return <PageLoading />;
  }

  if (failed || !products || products.length === 0) {
    return <PageNotFound />;
  }

  return (
    <main className="page-wrapper">
      {/* store info */}
      <section className="section-wrapper">
        <div className="borders p-4">
          <div className="md:flex gap-x-4">
            <div>
              <Image
                width={200}
                height={200}
                className="borders"
                src={products.storeImage}
                alt="storeimage"
              />
            </div>

            <div>
              <h2>{products.storeName}</h2>
              <h3>Location : {products.storeCity}</h3>
              <p>{products.description}</p>
              <div className="flex flex-row space-x-2">
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
        </div>
      </section>

      {/* store product */}
      <section className="section-wrapper">
        <div className="section-head">
          <div className="w-2 h-10 bg-primary"></div>
          <h2 className="capitalize">Shop product's</h2>
        </div>
        <div className="section-body">
          <div className="content-grid-4">
            <ProductCard products={products.products} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
