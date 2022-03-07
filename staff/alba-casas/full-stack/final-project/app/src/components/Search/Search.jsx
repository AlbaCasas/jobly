import React from "react";
import {
  StyledButtonSearch,
  StyledInputSearch,
  StyledInputSearchBorder,
  StyledSearch,
} from "./styled";

const Search = () => {
  return (
    <StyledSearch>
      <StyledInputSearchBorder placeholder="Search by company or title" />
      <StyledInputSearch placeholder="Location" />
      <StyledInputSearch placeholder="Role type" />
      <StyledButtonSearch>Find Job</StyledButtonSearch>
    </StyledSearch>
  );
};

export default Search;
