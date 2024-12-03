"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import {
  getAllProducts,
  getAllStoreProducts,
  getProductDetail,
  searchProducts,
} from "@/store/action/ProductAction";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import useDropdown from "@/hooks/useDropDown";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const searchParams = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    city: searchParams.get("city") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    maxRating: searchParams.get("maxRating") || "",
    minRating: searchParams.get("minRating") || "",
    sortBy: "createdAt",
    order: "asc",
    page: searchParams.get("page") || 1,
    limit: 8,
  });

  const buildQueryParams = useCallback((filters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return params.toString();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prevInput) => ({
      ...prevInput,
      [name]: name === "limit" ? prevInput.limit + 4 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?search=${searchInput.search}`);
    setShowDropdown(false);
  };

  const handleClick = (e) => {
    router.push(`/search?search=${e.target.value}`);
    setShowDropdown(false);
  };

  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(searchProducts(searchParams));
    }, 500)
  );

  useEffect(() => {
    if (searchInput.search) {
      debounceSearch(searchInput.search);
    }
  }, [dispatch, debounceSearch, searchInput.search]);

  useEffect(() => {
    const query = buildQueryParams(searchInput);
    if (query) {
      console.log("PRINT LOG INFO:", query);
      dispatch(getAllProducts(searchInput));
    }
  }, [pathname, params]);

  useEffect(() => {
    if (pathname === "/") {
      dispatch(getAllProducts({ limit: searchInput.limit }));
    } else if (params.shop) {
      if (params.product) {
        dispatch(getProductDetail(params.product));
      } else {
        dispatch(getAllStoreProducts(params.shop));
      }
    }
  }, [dispatch, searchInput.limit, pathname, params]);

  useDropdown(dropdownRef, setShowDropdown);

  return (
    <ProductContext.Provider
      value={{
        dropdownRef,
        searchInput,
        handleClick,
        handleChange,
        handleSubmit,
        showDropdown,
        setShowDropdown,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
