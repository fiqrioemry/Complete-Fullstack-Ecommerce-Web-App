import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItem } from "@/store/action/CartAction";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const { loading, message, success, failed } = useSelector(
    (state) => state.cart
  );

  const [cartItem, setCartItem] = useState({
    quantity: 1,
  });

  const handleIncrease = () => {
    const updatedQuantity = Math.min(cartItem.quantity + 1, product.stock);
    setCartItem((prevItem) => ({ ...prevItem, quantity: updatedQuantity }));
  };

  const handleDecrease = () => {
    const updatedQuantity = Math.max(cartItem.quantity - 1, 0);
    setCartItem((prevItem) => ({ ...prevItem, quantity: updatedQuantity }));
  };

  const handleAddCart = () => {
    if (!user) {
      toast.error("Please login to continue shopping");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } else {
      dispatch(addToCart(product.id, cartItem.quantity));
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
        cartItem,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
