import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteCartItem,
  getCartItem,
  updateCartItem,
} from "@/store/action/CartAction";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [quantity, setQuantity] = useState(1);
  const [checkoutId, setCheckoutId] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const { message, success, failed } = useSelector((state) => state.cart);

  // const handleCheck = (ids) => {
  //   const checked = ids.every((id) => checkoutId.includes(id));
  //   if (checked) {
  //     const result = checkoutId.filter((item) => !ids.includes(item));
  //     setCheckoutId(result);
  //   } else {
  //     const result = ids.filter((item) => !checkoutId.includes(item));
  //     const newId = Number(result);
  //     setCheckoutId(checkoutId.push(newId));
  //   }
  // };

  const handleCheck = (ids) => {
    const isChecked = ids.every((id) => checkoutId.includes(id));
    if (isChecked) {
      // Hapus ID dari checkoutId jika sudah dipilih
      setCheckoutId((prev) => prev.filter((item) => !ids.includes(item)));
    } else {
      // Tambahkan ID ke checkoutId jika belum dipilih
      setCheckoutId((prev) => [
        ...prev,
        ...ids.filter((item) => !prev.includes(item)),
      ]);
    }
  };

  const handleIncrease = (e) => {
    const { name, value } = e.target;
    if (name === "update") {
      dispatch(updateCartItem(value, 1));
    } else {
      const updatedQuantity = Math.min(quantity + 1, product.stock);
      setQuantity(updatedQuantity);
    }
  };

  const handleDecrease = (e) => {
    const { name, value } = e.target;
    if (name === "update") {
      dispatch(updateCartItem(value, -1));
    } else {
      const updatedQuantity = Math.max(quantity - 1, 0);
      setQuantity(updatedQuantity);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCartItem(id));
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
    setQuantity(1);
  }, [pathname]);

  useEffect(() => {
    if (user) {
      dispatch(getCartItem());
    }
  }, [user, dispatch, success, message]);

  useEffect(() => {
    if (success && message !== "") {
      toast.info(message);
    } else if (failed && message !== "") {
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
        handleDelete,
        quantity,
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
