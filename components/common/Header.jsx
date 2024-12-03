"use client";

import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";
import { useRouter } from "next/navigation";
import SearchDropdown from "./SearchDropdown";
import UserMenuDropDown from "./UserMenuDropdown";
import ButtonElement from "../element/ButtonElement";
import { useProduct } from "@/provider/ProductProvider";

const Header = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const {
    searchInput,
    handleChange,
    dropdownRef,
    showDropdown,
    setShowDropdown,
    handleSubmit,
    handleClick,
  } = useProduct();
  const { search, searchLoading, message } = useSelector(
    (state) => state.product
  );

  return (
    <header className="borders-b">
      <nav className="header-margin">
        <div className="header-logo">
          <h1>NEXT</h1>
          <span className="header-logo-span">SHOP</span>
        </div>

        <div className="relative w-full" ref={dropdownRef}>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              value={searchInput.search}
              onChange={handleChange}
              onFocus={() => setShowDropdown(true)}
              className="w-full p-2 border rounded"
              placeholder="Search your product"
            />
          </form>
          {showDropdown && (
            <SearchDropdown
              searchInput={searchInput.search}
              searchResult={search}
              message={message}
              loading={searchLoading}
              handleClick={handleClick}
            />
          )}
        </div>

        <div className="flex items-center space-x-6">
          <ShoppingCart user={user} />
          {user && <UserMenuDropDown />}
          {!user && (
            <ButtonElement
              title="Login"
              className="auth-button"
              handleClick={() => router.push("/login")}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
