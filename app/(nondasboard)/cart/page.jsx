"use client";

import React from "react";
import { useSelector } from "react-redux";
import SectionHead from "@/components/common/SectionHead";

const Page = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <section className="py-12">
      <div className="container mx-auto space-y-4">
        <SectionHead title="Your Cart" />
        <div className="flex flex-wrap ">
          {/* shopping cart*/}
          <div className="order-2 w-full md:order-1 md:w-[70%] pr-6">
            <div className="space-y-2">
              <div className="py-2 px-4 borders flex items-center space-x-4">
                <input type="checkbox" />
                <div>Select All</div>
              </div>

              <div className="py-2 px-4 borders flex items-center space-x-4">
                <input type="checkbox" />
                <div>Select All</div>
              </div>
            </div>
          </div>

          {/* shopping summary*/}
          <div className="order-2 w-full md:order-1 md:w-[30%]">
            <div className="borders h-[200px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
