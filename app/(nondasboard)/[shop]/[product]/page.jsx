"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import PageLoading from "@/components/common/PageLoading";
import ReviewComents from "@/components/product/ReviewComents";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProduct from "@/components/product/RelatedProduct";
import PageNotFound from "@/app/not-found";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";

const page = () => {
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
    <section className="py-6 md:py-10">
      <div className="container mx-auto space-y-8">
        <Breadcrumb links={pathURL} />
        <ProductDetails product={product} />
        <ReviewComents reviews={product.reviews} />
        <RelatedProduct category={product.category} />
      </div>
    </section>
  );
};

export default page;
