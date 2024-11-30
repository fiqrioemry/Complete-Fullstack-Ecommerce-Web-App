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
    <main className="page-wrapper">
      <section className="section-wrapper">
        <div className="section-head">
          <Link href="/">Home</Link> <span> / login</span>
        </div>
        <div className="section-body">
          <div className="content-grid-2">
            <div className="hidden md:flex-center">
              <ImageElement
                style="image-wrapper"
                width={300}
                height={300}
                path="/assets/empty_cart.png"
                alt="empty_cart"
              />
            </div>

            <div className="content-wrapper">
              <FormElement
                formStyle="content-wrapper"
                titleStyle="h3"
                formTitle="login page"
                wrapperStyle="flex-col-between"
                handleSubmit={handleLogin}
              >
                <InputElement
                  type="text"
                  name="email"
                  style="input-1"
                  value={input.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

                <InputElement
                  name="password"
                  style="input-1"
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
                  style="flex-center"
                  loading={loading}
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
        </div>
      </section>
    </main>
  );
};

export default Page;
