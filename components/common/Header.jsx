"use client";

import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";
import { MdSearch } from "react-icons/md";
import { useRouter } from "next/navigation";
import SearchDropdown from "./SearchDropdown";
import { useAuth } from "@/provider/AuthProvider";
import UserMenuDropDown from "./UserMenuDropdown";
import InputElement from "../element/InputElement";
import ButtonElement from "../element/ButtonElement";
import { useProduct } from "@/provider/ProductProvider";

const Header = () => {
  const router = useRouter();
  const { handleSearch, searchInput, handleChange } = useProduct();
  const { user } = useSelector((state) => state.auth);
  const { search, loading, message } = useSelector((state) => state.product);

  return (
    <header className="borders-b">
      <nav className="header-margin">
        <div className="header-logo">
          <h1>NEXT</h1>
          <span className="header-logo-span">SHOP</span>
        </div>

        <div className="header-search-margin">
          <form onSubmit={handleSearch} className="flex w-full items-center">
            <InputElement
              type="search"
              name="search"
              value={searchInput.search}
              style="header-search-input"
              onChange={handleChange}
              placeholder="search product name"
            >
              <button>
                <MdSearch className="absolute right-5 cursor-pointer" />
              </button>
            </InputElement>
          </form>

          <SearchDropdown
            input={searchInput.search}
            result={search}
            status={loading}
            message={message}
            handleSearch={handleSearch}
          />
        </div>

        <div className="flex-between space-x-4">
          <ShoppingCart user={user} />
          {user && <UserMenuDropDown />}
          {!user && (
            <ButtonElement
              title="Login"
              variant="primary"
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
