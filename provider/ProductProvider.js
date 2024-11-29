"use client";

import { useDispatch, useSelector } from "react-redux";
import { useParams, usePathname, useRouter } from "next/navigation";

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
import { debounce } from "lodash";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { input, setInput } = useAuth();
  const [limit, setLimit] = useState(8);

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  const handleSearch = () => {
    setInput((prevInput) => ({
      ...prevInput,
      search: "",
    }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(searchProducts(searchParams));
    }, 500),
    []
  );

  useEffect(() => {
    if (input.search) debounceSearch(input.search);
  }, [input.search]);

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
    <ProductContext.Provider value={{ handleShowMore, handleSearch, limit }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
