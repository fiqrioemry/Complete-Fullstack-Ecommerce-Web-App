import React from "react";
import SpinnerElement from "../element/SpinnerElement";

const SearchDropdown = ({ input, handleSearch, result, status, message }) => {
  return (
    <div
      className={`${
        input ? "h-auto" : "h-0"
      } absolute w-full bg-white rounded-md top-12  shadow-xl transition-all duration-300 overflow-y-auto`}
    >
      <div className="flex flex-col gap-y-4 py-4 px-4">
        {status ? (
          <div className="flex items-center justify-center py-4">
            <SpinnerElement />
          </div>
        ) : !result.length ? (
          <div>{message}</div>
        ) : (
          result.map((item, index) => {
            return (
              <button
                onClick={handleSearch(`/search?q=${item.slug}`)}
                className="flex items-center"
                key={index}
              >
                {item.title.slice(0, 45) + "..."}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
