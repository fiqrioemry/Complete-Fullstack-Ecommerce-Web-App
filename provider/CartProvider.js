import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItem } from "@/store/action/CartAction";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  console.log("PRINT LOG INFO:");
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const { message, success, failed } = useSelector((state) => state.cart);

  const handleIncrease = () => {
    const updatedQuantity = Math.min(quantity + 1, product.stock);
    setQuantity(updatedQuantity);
  };

  const handleDecrease = () => {
    const updatedQuantity = Math.max(quantity - 1, 0);
    setQuantity(updatedQuantity);
  };

  const handleAddCart = () => {
    if (!user) {
      toast.error("Please login to continue shopping");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } else {
      dispatch(addToCart(product.id, quantity));
    }
  };

  const handleCheckout = () => {
    toast.info("Please login to checkout");
  };

  useEffect(() => {
    if (user) {
      dispatch(getCartItem());
    }
  }, [user, dispatch, success, message]);

  useEffect(() => {
    if (success) {
      toast.info(message);
    } else if (failed) {
      toast.error(message);
    }
  }, [dispatch, success, failed, message]);

  return (
    <CartContext.Provider
      value={{
        handleIncrease,
        handleDecrease,
        handleCheckout,
        handleAddCart,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
