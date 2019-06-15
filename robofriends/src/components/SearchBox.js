import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
