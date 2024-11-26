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

const page = () => {
  const pathname = usePathname();
  const { product, failed } = useSelector((state) => state.product);
  const [storeURL, productURL] = pathname.trim().split("/").slice(1, 3);

  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto space-y-8">
        <div>
          <h4>
            home /
            <Link href={`/${product.storeSlug}`}> {product.storeSlug} </Link> /
            {product.slug}
          </h4>
        </div>
        <ProductDetails product={product} />
        <ReviewComents reviews={product.reviews} />
        <RelatedProduct category={product.category} />
      </div>
    </section>
  );
};

export default page;
