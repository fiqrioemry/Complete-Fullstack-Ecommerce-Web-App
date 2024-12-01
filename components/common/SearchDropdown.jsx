import React from "react";
import SpinnerElement from "../element/SpinnerElement";

const SearchDropdown = ({
  ref,
  message,
  loading,
  searchInput,
  searchResult,
  handleSearch,
}) => {
  return (
    <div
      ref={ref}
      className="h-auto absolute w-full top-15 bg-white rounded-md shadow-xl transition-all duration-300 overflow-y-auto z-30"
    >
      <div className="space-y-2 p-2">
        {/* first time rendered */}
        {!searchInput ? (
          <div>search your product</div>
        ) : loading ? (
          <div className="flex-center">
            <SpinnerElement />
          </div>
        ) : !searchResult.length ? (
          <div>{message}</div>
        ) : (
          searchResult.map((item, index) => (
            <button
              name="search"
              value={item.title}
              onClick={handleSearch}
              className="flex items-center"
              key={index}
            >
              {item.title.slice(0, 50) + "..."}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
