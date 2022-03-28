import React from "react";
import { StyledSelectSearch } from "./styled";

const Select = ({
  name = "",
  placeholder = "Location",
  options = [],
  defaultValue,
}) => {
  return (
    <StyledSelectSearch name={name}>
      <option defaultValue={!defaultValue ? true : false} value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          defaultValue={option === defaultValue ? true : false}
        >
          {option}
        </option>
      ))}
    </StyledSelectSearch>
  );
};

export default Select;
