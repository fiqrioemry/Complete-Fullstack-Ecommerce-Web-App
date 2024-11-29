"use client";

import React from "react";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useAuth } from "@/provider/AuthProvider";
import UserMenuDropDown from "./UserMenuDropdown";
import InputElement from "../element/InputElement";
import ButtonElement from "../element/ButtonElement";

const Header = () => {
  const router = useRouter();
  const { input, handleChange } = useAuth();
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="borders-b">
      <nav className="header-margin">
        <div className="header-logo">
          <h1>NEXT</h1>
          <span className="header-logo-span">SHOP</span>
        </div>

        <div className="header-search-margin">
          <InputElement
            type="search"
            name="search"
            value={input.search}
            style="header-search-input"
            onChange={handleChange} // TODO : features not yet available
            placeholder="search product name"
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
