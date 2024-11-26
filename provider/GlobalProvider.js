"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./AuthProvider";
import { usePathname } from "next/navigation";
import { ExcludeNavbarFooter } from "@/config";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ProductProvider } from "./ProductProvider";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();

  const [animation, setAnimation] = useState(false);
  const handleNotif = () => {
    setAnimation((prev) => !prev);
    setTimeout(() => {
      setAnimation((prev) => !prev);
      toast.info("Sorry, Feature is not available");
    }, 2000);
  };

  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ pathname, handleNotif, animation }}>
        <AuthProvider>
          <ProductProvider>
            {!ExcludeNavbarFooter.includes(pathname) && <Header />}
            {children}
            {!ExcludeNavbarFooter.includes(pathname) && <Footer />}
          </ProductProvider>
        </AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
