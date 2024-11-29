"use client";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AuthRoute, initialInputState } from "@/config";
import { usePathname, useRouter } from "next/navigation";
import {
  reset,
  userLogin,
  userLogout,
  userRegister,
} from "@/store/action/AuthAction";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const { success, failed, message, loading } = useSelector(
    (state) => state.auth
  );
  const [input, setInput] = useState({ initialInputState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(userRegister(input));
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    if (success) {
      if (pathname === "/login") {
        router.push("/");
      } else if (pathname === "/register") {
        router.push("/login");
      } else if (AuthRoute.includes(pathname)) {
        router.push("/login");
      }
      toast.info(message);
    } else if (failed) {
      toast.error(message);
    }
    dispatch(reset());
  }, [success, failed, message, dispatch, pathname, router]);

  return (
    <AuthContext.Provider
      value={{
        input,
        handleChange,
        handleLogin,
        handleRegister,
        handleLogout,
        loading,
        active,
        setActive,
        setInput,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
