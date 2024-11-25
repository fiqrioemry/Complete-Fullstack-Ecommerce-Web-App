"use client";

import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

const HiddenElement = ({ hidden, setHidden }) => {
  return (
    <div
      onClick={() => {
        setHidden((prev) => !prev);
      }}
      className="bg-transparent right-3 top-4 absolute cursor-pointer text-xl"
    >
      {hidden ? <BiHide /> : <BiShow />}
    </div>
  );
};

export default HiddenElement;
