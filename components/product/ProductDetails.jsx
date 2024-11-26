"use client";
import { Button } from "@/components/ui/button";
import ImageElement from "../element/ImageElement";
import QuantityElement from "../element/QuantityElement";
import { useCart } from "@/provider/CartProvider";

const ProductDetails = ({ product }) => {
  const { handleDecrease, handleIncrease, cartItem } = useCart();

  return (
    <div className="product-detail-parent">
      {/* product images */}
      <div className="product-detail-image">
        <div className="product-detail-multiple">
          {product.images?.map((image, index) => {
            return (
              <ImageElement
                width={80}
                height={80}
                style="detail-multiple-image"
                alt="detail_multiple_image"
                path={image}
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
          path={product.images[0]}
        />
      </div>

      {/* product description */}
      <div>
        <h2>{product.title}</h2>
        <h3>Rp. {product.price}</h3>
        <p>{product.description}</p>
        <div>
          <QuantityElement
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={cartItem.quantity}
            stock={product.stock}
          />
          <div>{product.stock}</div>
        </div>
        <div className="space-y-2">
          <Button className="w-full">ADD TO CART</Button>
          <Button variant="primary" className="w-full">
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
