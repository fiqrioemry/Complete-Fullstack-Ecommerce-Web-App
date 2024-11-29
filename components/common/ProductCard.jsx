"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ProductCard = ({ products }) => {
  const router = useRouter();
  return (
    <>
      {products?.map((product, index) => (
        <article className="card-wrapper" key={index}>
          <div className="image-wrapper">
            <Image
              width={200}
              height={200}
              src={product.image}
              alt="product_card"
            />
          </div>

          <h4>{product.title}</h4>
          <p>Rp. {product.price}</p>

          <Button
            variant="primary"
            onClick={() => router.push(`/${product.storeSlug}/${product.slug}`)}
            className="w-full"
          >
            Detail
          </Button>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
