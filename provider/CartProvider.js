"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import useHandleNotification from "@/hooks/useHandleNotification";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  reset,
  addToCart,
  getCartItem,
  updateCartItem,
  deleteCartItem,
} from "@/store/action/CartAction";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [checkoutId, setCheckoutId] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const { cart, message, success, failed } = useSelector((state) => state.cart);

  const handleCheck = (ids) => {
    const isChecked = ids.every((id) => checkoutId.includes(id));
    if (isChecked) {
      setCheckoutId((prev) => prev.filter((item) => !ids.includes(item)));
    } else {
      setCheckoutId((prev) => [
        ...prev,
        ...ids.filter((item) => !prev.includes(item)),
      ]);
    }
  };

  const handleAddCart = () => {
    if (!user) {
      toast.error("Please login to continue shopping");
      setTimeout(() => router.push("/login"), 1500);
    } else {
      dispatch(addToCart(product.id, quantity));
    }
  };

  const handleIncrease = (e) => {
    if (e.target.name === "update") {
      dispatch(updateCartItem(e.target.value, 1));
    } else {
      setQuantity((prev) => Math.min(prev + 1, product.stock));
    }
  };

  const handleDecrease = (e) => {
    if (e.target.name === "update") {
      dispatch(updateCartItem(e.target.value, -1));
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleDelete = (id) => dispatch(deleteCartItem(id));

  const handleCheckout = () => {
    toast.info("Please login to checkout");
  };

  useEffect(() => {
    if (user) dispatch(getCartItem());
  }, [user, success]);

  useHandleNotification(success, failed, message, reset);
  return (
    <CartContext.Provider
      value={{
        handleIncrease,
        handleDecrease,
        handleCheckout,
        handleAddCart,
        handleDelete,
        quantity,
        setQuantity,
        handleCheck,
        checkoutId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
