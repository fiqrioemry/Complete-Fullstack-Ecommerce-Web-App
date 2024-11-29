"use client";
import { useSelector } from "react-redux";
import { useCart } from "@/provider/CartProvider";
import ImageElement from "../element/ImageElement";
import ButtonElement from "../element/ButtonElement";
import QuantityElement from "../element/QuantityElement";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const {
    handleDecrease,
    handleIncrease,
    handleCheckout,
    handleAddCart,
    quantity,
  } = useCart();
  const { loading } = useSelector((state) => state.cart);

  return (
    <div className="content-grid-2">
      {/* product images */}
      <div className="content-flex">
        <div className="content-display-20">
          {product.images?.map((image, index) => {
            return (
              <div className="image-wrapper" key={index}>
                <Image
                  width={80}
                  height={80}
                  src={image}
                  alt="image_detail_thumbnail"
                />
              </div>
            );
          })}
        </div>
        <div className="content-display-80">
          <div className="image-wrapper">
            <Image
              width={450}
              height={450}
              src={product.images[0]}
              alt="image_detail_thumbnail"
            />
          </div>
        </div>
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
              quantity={quantity}
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
