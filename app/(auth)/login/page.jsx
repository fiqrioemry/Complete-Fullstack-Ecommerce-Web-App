"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { signInFormControls } from "@/config";
import { useAuth } from "@/provider/AuthProvider";
import ImageElement from "@/components/element/ImageElement";
import FormInput from "@/components/common/common-form/FormInput";

const Page = () => {
  const { loading } = useSelector((state) => state.auth);
  const { handleSignIn, signInFormData, setSignInFormData } = useAuth();

  function signInFormValidation() {
    return !signInFormData.email.length || !signInFormData.password.length;
  }
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
              <h1 className="text-center">Login Page</h1>
              <FormInput
                buttonText="login"
                isButtonLoading={loading}
                formData={signInFormData}
                handleSubmit={handleSignIn}
                setFormData={setSignInFormData}
                formControls={signInFormControls}
                isButtonDisabled={signInFormValidation()}
              />

              <div className="text-center">
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
