"use client";

import { useDispatch, useSelector } from "react-redux";
import { useParams, usePathname } from "next/navigation";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getAllProducts,
  getAllStoreProducts,
  getProductDetail,
  searchProducts,
} from "@/store/action/ProductAction";
import { useAuth } from "./AuthProvider";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { input, handleChange } = useAuth();
  const params = useParams();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [limit, setLimit] = useState(8);
  const { search } = useSelector((state) => state.product);
  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(searchProducts(searchParams));
    }, 500),
    []
  );

  useEffect(() => {
    if (input) {
      debounceSearch(input.search);
    } else if (search) {
      console.log(search);
    }
  }, [dispatch, search, input, debounceSearch, handleChange]);

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
