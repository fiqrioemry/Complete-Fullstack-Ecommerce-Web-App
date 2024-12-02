"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { signUpFormControls } from "@/config";
import { useAuth } from "@/provider/AuthProvider";
import ImageElement from "@/components/element/ImageElement";
import FormInput from "@/components/common/common-form/FormInput";

const Page = () => {
  const { loading } = useSelector((state) => state.auth);
  const { setSignUpFormData, signUpFormData, handleSignUp } = useAuth();

  function signUpFormValidation() {
    return (
      !signUpFormData.name.length ||
      !signUpFormData.email.length ||
      !signUpFormData.password.length ||
      !signUpFormData.passwordConfirm.length
    );
  }

  return (
    <main className="page-wrapper">
      <section className="section-wrapper">
        <div className="section-head">
          <Link href="/">Home</Link> <span> / register</span>
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
              <h1 className="text-center">Registration Page</h1>
              <FormInput
                buttonText={"Register"}
                isButtonLoading={loading}
                formData={signUpFormData}
                handleSubmit={handleSignUp}
                setFormData={setSignUpFormData}
                formControls={signUpFormControls}
                isButtonDisabled={signUpFormValidation()}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
