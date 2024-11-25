"use client";
import { Button } from "@/components/ui/button";
import ImageElement from "../element/ImageElement";
import QuantityElement from "../element/QuantityElement";

const ProductDetails = ({ product }) => {
  return (
    <div className="product-detail-parent">
      {/* product images */}
      <div className="product-detail-image">
        <div className="product-detail-multiple">
          {[...Array(4)].map((__, index) => {
            return (
              <ImageElement
                width={80}
                height={80}
                style="detail-multiple-image"
                alt="detail_multiple_image"
                path=""
                key={index}
              />
            );
          })}
        </div>
        <ImageElement
          width={350}
          height={350}
          style="detail-single-image"
          alt="detail_single_image"
          path=""
        />
      </div>

      {/* product description */}
      <div>
        <h2>{product.title}</h2>
        <h3>RP. {product.price}</h3>
        <p>{product.description}</p>
        <QuantityElement />
        <div className="space-y-2">
          <Button className="w-full">ADD TO CART</Button>
          <Button className="w-full">CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
