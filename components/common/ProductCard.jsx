"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import formatToRupiah from "@/utils/formatCurrency";

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
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/3/26/f5c29d8a-8c0f-44f1-9300-1192b72b8e54.png.webp?ect=4g"
              alt="product_card"
            />
          </div>

          <h4>{product.title}</h4>
          <p>{formatToRupiah(product.price)}</p>
          <Button
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
