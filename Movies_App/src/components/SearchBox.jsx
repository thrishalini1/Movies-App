import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      // my-3 (margin under y axis
      //(top and bottom), 3 is the amount
      //of margin)
      className="form-control
my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};
export default SearchBox;
