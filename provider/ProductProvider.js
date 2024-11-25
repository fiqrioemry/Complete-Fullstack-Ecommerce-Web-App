"use client";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams, usePathname, useRouter } from "next/navigation";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAllProducts,
  getAllStoreProducts,
  getProductDetail,
} from "@/store/action/ProductAction";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [limit, setLimit] = useState(8);

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  useEffect(() => {
    if (pathname === "/") {
      dispatch(getAllProducts(limit));
    } else if (params.shop && !params.product) {
      dispatch(getAllStoreProducts(params.shop));
    } else if (params.shop && params.product) {
      dispatch(getProductDetail(params.product));
    }
  }, [dispatch, limit, pathname, params]);
  return (
    <ProductContext.Provider value={{ handleShowMore, limit }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
