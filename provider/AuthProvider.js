"use client";

import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import useHandleNavigation from "@/hooks/useHandleNavigation";
import useHandleNotification from "@/hooks/useHandleNotification";
import { initialSignInState, initialSignUpState } from "@/config";
import React, { createContext, useContext, useState } from "react";
import {
  reset,
  userLogin,
  userLogout,
  userRegister,
} from "@/store/action/AuthAction";
import PageLoading from "@/components/common/PageLoading";
import useHandleAuth from "@/hooks/useHandleAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const accessToken = Cookies.get("user") || null;
  const [pageLoading, setPageLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const { success, failed, message } = useSelector((state) => state.auth);
  const [signInFormData, setSignInFormData] = useState(initialSignInState);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpState);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(userLogin(signInFormData));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(userRegister(signUpFormData));
  };

  const handleSignOut = () => {
    dispatch(userLogout());
  };

  useHandleNavigation(user, pathname);
  useHandleAuth(user, accessToken, setPageLoading);
  useHandleNotification(success, failed, message, reset);

  return (
    <AuthContext.Provider
      value={{
        handleSignOut,
        handleSignUp,
        handleSignIn,
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
      }}
    >
      {pageLoading ? <PageLoading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
