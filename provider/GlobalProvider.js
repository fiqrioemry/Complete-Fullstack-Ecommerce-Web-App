"use client";

import { NavbarFooterRoute } from "@/config";
import { AuthProvider } from "./AuthProvider";
import { useParams, usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import React, { createContext, useContext } from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ProductProvider } from "./ProductProvider";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const pathname = usePathname();

  const isDynamicRoute = (pathname) => {
    const dynamicRoutes = ["/:shop", "/:shop/:product"];
    return dynamicRoutes.some((pattern) => {
      const regex = new RegExp(
        pattern.replace(/:\w+/g, "([^/]+)").replace(/\//g, "\\/") //
      );
      return regex.test(pathname);
    });
  };

  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ pathname }}>
        <AuthProvider>
          <ProductProvider>
            {NavbarFooterRoute.includes(pathname) ||
              (isDynamicRoute(pathname) && <Header />)}
            {children}
            {NavbarFooterRoute.includes(pathname) ||
              (isDynamicRoute(pathname) && <Footer />)}
          </ProductProvider>
        </AuthProvider>
      </GlobalContext.Provider>
    </Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
