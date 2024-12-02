"use client";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [cartIds, setCartIds] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartGroup, setCartGroup] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutId, setCheckoutId] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const { cart, message, success, failed } = useSelector(
    (state) => state.cart || { cart: [] }
  );

  const groupByStore = () => {
    const grouped = cart.reduce((acc, curr) => {
      acc[curr.storeName] = acc[curr.storeName] || [];
      acc[curr.storeName].push(curr);
      return acc;
    }, {});
    setCartGroup(grouped);
    setCartIds(cart.map((item) => item.id));
  };

  const countTotalPrice = () => {
    const total = cart
      .filter((item) => checkoutId.includes(item.id))
      .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0);
    setTotalPrice(total);
  };

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
  }, [user, dispatch, success, message]);

  useEffect(() => {
    if (cart?.length) {
      groupByStore();
      countTotalPrice();
    }
  }, [cart, checkoutId]);

  useEffect(() => {
    setQuantity(1);
  }, [pathname]);

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
        handleCheck,
        checkoutId,
        cartGroup,
        cartIds,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
