"use client";
import { Button } from "@/components/ui/button";
import ImageElement from "../element/ImageElement";
import QuantityElement from "../element/QuantityElement";
import { useCart } from "@/provider/CartProvider";
import ButtonElement from "../element/ButtonElement";
import { useSelector } from "react-redux";

const ProductDetails = ({ product }) => {
  const {
    handleDecrease,
    handleIncrease,
    handleCheckout,
    handleAddCart,
    cartItem,
    loading,
  } = useCart();

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
      <div className="flex flex-col justify-between">
        <div className="h-full max-h-[200px]">
          <h2>{product.title}</h2>
          <h3>Rp. {product.price}</h3>
          <p>{product.description}</p>
        </div>
        <div>
          <div className="flex space-x-4 py-4">
            <QuantityElement
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              quantity={cartItem.quantity}
              stock={product.stock}
            />
            <div>Maximum : {product.stock} Pieces</div>
          </div>
          <div className="space-y-2">
            <ButtonElement
              title="add to cart"
              name="add"
              loading={loading}
              handleClick={handleAddCart}
              style="w-full flex-center"
            />

            <ButtonElement
              title="checkout"
              name="checkout"
              handleClick={handleCheckout}
              style="w-full flex-center"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
