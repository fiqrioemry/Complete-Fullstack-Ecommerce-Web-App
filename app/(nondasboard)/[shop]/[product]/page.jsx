"use client";

import React from "react";
import { useSelector } from "react-redux";
import PageLoading from "@/components/common/PageLoading";
import ReviewComents from "@/components/product/ReviewComents";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProduct from "@/components/product/RelatedProduct";
import PageNotFound from "@/app/not-found";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";

const Page = () => {
  const pathname = usePathname();
  const { product, failed, loading } = useSelector((state) => state.product);
  const pathURL = ["home", ...pathname.trim().split("/").slice(1)];

  if (loading && !product) {
    return <PageLoading />;
  }

  if (
    failed ||
    !product ||
    product.length === 0 ||
    product.storeSlug !== pathURL[1] ||
    product.slug !== pathURL[2]
  ) {
    return <PageNotFound />;
  }

  return (
    <main className="page-wrapper">
      <section className="content-wrapper">
        <Breadcrumb links={pathURL} />
        <ProductDetails product={product} />
        <ReviewComents reviews={product.reviews} />
        <RelatedProduct category={product.category} />
      </section>
    </main>
  );
};

export default Page;
