"use client";

import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import PageLoading from "@/components/common/PageLoading";
import ReviewComents from "@/components/product/ReviewComents";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProduct from "@/components/product/RelatedProduct";

const page = () => {
  const dispatch = useDispatch();
  const { product, relatedProducts, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (product.category && !loading) {
      dispatch(getProductByCategory(category));
    }
  }, [dispatch, product]);

  return (
    <section className="py-6 md:py-10">
      {product.length === 0 ? (
        <PageLoading /> // TODO : temporary only, Replace with proper loader later.
      ) : (
        <div className="container mx-auto space-y-8">
          <div>
            <h4>
              home /
              <Link href={`/${product.storeSlug}`}> {product.storeSlug} </Link>{" "}
              /{product.slug}
            </h4>
          </div>

          <ProductDetails product={product} />
          <ReviewComents reviews={product?.reviews} />
          {relatedProducts.length !== 0 && (
            <RelatedProduct relatedProducts={relatedProducts} />
          )}
        </div>
      )}
    </section>
  );
};

export default page;
