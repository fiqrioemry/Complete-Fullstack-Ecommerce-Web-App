/* eslint-disable react-hooks/exhaustive-deps */

import { useDispatch } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
import React, { useCallback, useEffect, useState } from "react";
import InputElement from "../element/InputElement";

const FilterProducts = ({ searchParams = "" }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);

  return (
    <div className="p-4 space-y-4">
      <h1>Filter</h1>

      <div>
        {/* Price Filter */}
        <div className="overflow-hidden">
          <div className="flex-between">
            <h3>Price</h3>
            <button>
              <FaArrowUp />
            </button>
          </div>
          <div className="h-auto">
            {/* Minimum price */}
            <div className="space-y-2">
              <div className="flex items-center bg-red-500">
                <div className="borders py-2 px-4">$</div>
                <InputElement
                  name="minPrice"
                  placeholder="minimum price"
                  style="input"
                />
              </div>

              <div className="flex items-center">
                <div>$</div>
                <input type="number" className="input-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="overflow-hidden ">
          <div className="flex items-center px-4 py-4  justify-between">
            <div className="text-xl font-semibold">Rating</div>
            <button className="rounded-full bg-gray-200 p-2">
              <FaArrowUp className="" />
            </button>
          </div>
          <div className="">
            <div className="flex flex-col items-center h-10 mb-4 mt-4">
              <input
                type="range"
                className="w-full"
                min="1"
                max="5"
                step="1"
                value={minRating}
              />
              <div className="mt-2 text-lg font-semibold">
                <div className="flex items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
