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
    page: searchParams.get("page") || 1,
  });

  const buildQueryParams = useCallback((filters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return params.toString();
  }, []);

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
    e.preventDefault();
    router.push(`/search?search=${searchInput.search}`);
    setShowDropdown(false);
  };

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    const query = buildQueryParams({ ...searchInput, [name]: value });
    router.push(`/search?${query}`);
    setShowDropdown(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      dispatch(getAllProducts(searchInput));
    }
  }, [pathname, params]);

  useEffect(() => {
    if (pathname === "/") {
      dispatch(getAllProducts(limit));
    } else if (params.shop) {
      if (params.product) {
        dispatch(getProductDetail(params.product));
      } else {
        dispatch(getAllStoreProducts(params.shop));
      }
    }
  }, [dispatch, limit, pathname, params]);

  useDropdown(dropdownRef, setShowDropdown);

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
