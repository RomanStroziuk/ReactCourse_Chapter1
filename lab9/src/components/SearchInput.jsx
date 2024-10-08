import React from "react";

const SearchInput = ({ searchValue, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by first name"
      value={searchValue}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;
