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

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [limit, setLimit] = useState(8);
  const searchParams = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState({
    order: "",
    sortBy: "",
    city: searchParams.get("city") || "",
    search: searchParams.get("search") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    category: searchParams.get("category") || "",
    maxRating: searchParams.get("maxRating") || "",
    minRating: searchParams.get("minRating") || "",
  });

  const buildQueryParams = (filters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    return params.toString();
  };

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 4);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const query = buildQueryParams({
      ...searchInput,
      search: searchInput.search.trim(), // Ensure no trailing/leading spaces
    });
    router.push(`/search?${query}`); // Construct and navigate to the URL
    setShowDropdown(false);
  };

  const handleSearch = (params) => {
    setSearchInput((prevInput) => ({
      ...prevInput,
      search: params,
    }));
    const query = buildQueryParams(searchInput);
    router.push(`/search?search=${query}`);
    setShowDropdown(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce((searchParams) => {
      dispatch(searchProducts(searchParams));
    }, 500),
    []
  );

  useEffect(() => {
    const query = buildQueryParams(searchInput);
    if (query) {
      console.log("PRINT LOG INFO:");
      dispatch(getAllProducts(searchInput));
    }
  }, []);

  useEffect(() => {
    if (searchInput.search) {
      debounceSearch(searchInput.search);
    }
  }, [dispatch, debounceSearch, searchInput.search]);

  useEffect(() => {
    if (pathname === "/") {
      dispatch(getAllProducts(limit));
    } else if (pathname.includes("/search?")) {
      dispatch(getAllProducts(searchInput));
    } else if (params.shop && !params.product) {
      dispatch(getAllStoreProducts(params.shop));
    } else if (params.shop && params.product) {
      dispatch(getProductDetail(params.product));
    }
  }, [dispatch, limit, pathname, params]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        limit,
        dropdownRef,
        searchInput,
        handleSearch,
        handleChange,
        handleSubmit,
        showDropdown,
        handleShowMore,
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
