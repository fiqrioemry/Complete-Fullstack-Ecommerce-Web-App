"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/provider/AuthProvider";
import FormElement from "@/components/element/FormElement";
import InputElement from "@/components/element/InputElement";
import ImageElement from "@/components/element/ImageElement";
import ButtonElement from "@/components/element/ButtonElement";
import HiddenElement from "@/components/element/HiddenElement";

const Page = () => {
  const { handleLogin, handleChange, input, loading, active, setActive } =
    useAuth();
  return (
    <section className="container mx-auto">
      <div className="py-12 text-sm md:text-lg">
        <Link href="/">Home</Link> <span> / login</span>
      </div>

      <div className="flex flex-wrap mb-12">
        <div className="auth-image-margin ">
          <ImageElement
            style="auth-page-image"
            width={300}
            height={300}
            path="/assets/empty_cart.png"
            alt="empty_cart"
          />
        </div>

        <div className="auth-form-margin">
          <FormElement
            formStyle="auth-form"
            titleStyle="auth-title"
            formTitle="Login page"
            wrapperStyle="auth-wrapper"
            handleSubmit={handleLogin}
          >
            <InputElement
              type="text"
              name="email"
              style="auth-input"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <InputElement
              name="password"
              style="auth-input"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type={active ? "password" : "text"}
            >
              <HiddenElement hidden={active} setHidden={setActive} />
            </InputElement>

            <ButtonElement
              title="login"
              type="submit"
              style="auth-button"
              loading={loading}
              loadingStyle="auth-loading"
            />
          </FormElement>
          <div>
            <span> Dont have an account ? </span>
            <Link href="/register" className="font-semibold">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
