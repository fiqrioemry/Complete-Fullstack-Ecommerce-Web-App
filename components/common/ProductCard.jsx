"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import ImageElement from "../element/ImageElement";

const ProductCard = ({ products }) => {
  const router = useRouter();
  return (
    <>
      {products?.map((product, index) => (
        <article className="borders p-2 space-y-1 " key={index}>
          <ImageElement
            width={200}
            height={200}
            style="product-card-image"
            src={product.images}
            alt="temporary"
          />
          <h4 className="font-medium">{product.title}</h4>
          <h4>Rp. {product.price}</h4>
          <div>
            <Button
              onClick={() =>
                router.push(`/${product.storeSlug}/${product.slug}`)
              }
              className="w-full"
            >
              Detail
            </Button>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
