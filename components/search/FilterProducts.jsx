/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";

import { FaArrowUp } from "react-icons/fa";
import InputElement from "../element/InputElement";
import CheckboxElement from "../common/CheckboxElement";
import { useProduct } from "@/provider/ProductProvider";

const cities = ["Medan", "Jakarta", "Surabaya", "Bandung", , "Yogyakarta"];

const FilterProducts = () => {
  const { handleChange, searchInput } = useProduct();
  const { city, minPrice, maxPrice, category, minRating, maxRating } =
    searchInput;
  return (
    <div className="p-4 space-y-4">
      <h1>Filter</h1>

      <div className="overflow-hidden space-y-2">
        <div className="flex-between">
          <h3>Price</h3>
          <button>
            <FaArrowUp />
          </button>
        </div>

        <div className="h-auto space-y-2">
          <div className="flex items-center">
            <div className="borders py-2 px-4">$</div>
            <InputElement
              name="minPrice"
              value=""
              placeholder="minimum price"
              style="p-2 w-full borders outline-none focus:border-primary block"
            />
          </div>

          <div className="flex items-center">
            <div className="borders py-2 px-4">$</div>
            <InputElement
              name="minPrice"
              value=""
              placeholder="minimum price"
              style="p-2 w-full borders outline-none focus:border-primary block"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden space-y-2">
        <div className="flex-between">
          <h3>City</h3>
          <button>
            <FaArrowUp />
          </button>
        </div>

        <div className="h-auto space-y-2">
          {cities.map((city, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <CheckboxElement
                value={city}
                name="city"
                handleCheck={handleChange}
                checked=""
              />
              <div>{city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
