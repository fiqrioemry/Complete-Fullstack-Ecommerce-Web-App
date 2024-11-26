"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { toast } from "react-toastify";
import { AuthProvider } from "./AuthProvider";
import { usePathname } from "next/navigation";
import { ExcludeNavbarFooter } from "@/config";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ProductProvider } from "./ProductProvider";
import React, { createContext, useContext, useState } from "react";
import { CartProvider } from "./CartProvider";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();

  const [target, setTarget] = useState({
    chat: false,
    follow: false,
    share: false,
  });

  const handleNotif = (e) => {
    const name = e.target.name;
    setTarget((prevTarget) => ({ ...prevTarget, [name]: !prevTarget[name] }));
    setTimeout(() => {
      toast.error("Sorry, Feature is not available");
      setTarget((prevTarget) => ({ ...prevTarget, [name]: !prevTarget[name] }));
    }, 300);
  };

  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ pathname, handleNotif, target }}>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              {!ExcludeNavbarFooter.includes(pathname) && <Header />}
              {children}
              {!ExcludeNavbarFooter.includes(pathname) && <Footer />}
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
