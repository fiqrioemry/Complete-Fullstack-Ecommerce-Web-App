"use client";

import { usePathname, useRouter } from "next/navigation";
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
import { Router } from "lucide-react";

const AuthContext = createContext();

const protectedRoute = ["/admin"];

const AuthRoute = [
  "/cart",
  "/user",
  "/user/address",
  "/user/setting",
  "/user/transaction",
  "/user/checkout",
];

const NonAuthRoute = ["/register", "/login"];

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
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

  useHandleNavigation(user, pathname, setPageLoading);
  useHandleNotification(success, failed, message, reset);
  if (pageLoading) return <PageLoading />;

  if (!user && AuthRoute.includes(pathname)) return router.push("/login");

  if (!user && protectedRoute.includes(pathname)) return router.push("/login");

  if (user && NonAuthRoute.includes(pathname)) return router.push("/");

  if (user && user.userRole !== "Admin" && protectedRoute.includes(pathname))
    return router.push("/");

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
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
