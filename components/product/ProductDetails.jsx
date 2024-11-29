"use client";
import { useSelector } from "react-redux";
import { useCart } from "@/provider/CartProvider";
import ImageElement from "../element/ImageElement";
import ButtonElement from "../element/ButtonElement";
import QuantityElement from "../element/QuantityElement";
import Image from "next/image";

const ProductDetails = ({ links, product }) => {
  const {
    handleDecrease,
    handleIncrease,
    handleCheckout,
    handleAddCart,
    quantity,
  } = useCart();
  const { loading } = useSelector((state) => state.cart);

  return (
    <section className="section-wrapper">
      <div className="section-head">
        {links.map((title, index) => (
          <div key={index}>
            {index === 0 ? (
              <>
                <button onClick={() => router.push("/")}>{title}</button>
                {links.length > 1 && <span>/</span>}
              </>
            ) : index === links.length - 1 ? (
              <span>{title}</span>
            ) : (
              <>
                <button
                  onClick={() =>
                    router.push(`/${links.slice(1, index + 1).join("/")}`)
                  }
                >
                  {title}
                </button>
                <span>/</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="section-centent">
        <div className="content-grid-2">
          {/* product images */}
          <div className="content-flex">
            <div className="display-20">
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
            <div className="display-80">
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
          <div className="flex-col-between">
            <div className="main-content">
              <h2>{product.title}</h2>
              <p>Rp. {product.price}</p>
              <p>{product.description}</p>
            </div>
            <div className="main-content">
              <div className="flex-center-start">
                <QuantityElement
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                  quantity={quantity}
                  stock={product.stock}
                />
                <div>Maximum : {product.stock} Pieces</div>
              </div>
              <div className="main-content">
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
      </div>
    </section>
  );
};

export default ProductDetails;
