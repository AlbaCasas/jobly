import React from "react";

import {
  Checkbox,
  SearchForm,
  StyledButtonSearch,
  StyledInputSearch,
  StyledInputSearchBorder,
  StyledJobSearch,
  StyledSearch,
  Wrapper,
} from "./styled";
import Text from "../Text";

const Search = () => {
  return (
    <StyledSearch>
      <SearchForm>
        <StyledInputSearchBorder placeholder="Search by company or title" />
        <StyledInputSearch placeholder="Location" />
        <StyledInputSearch placeholder="Role type" />
        <StyledButtonSearch>Find Job</StyledButtonSearch>
      </SearchForm>
      <StyledJobSearch>
        <Checkbox>
          <Wrapper>
            <input type="checkbox" />
            <Text>Hide jobs with no candidates</Text>
          </Wrapper>
          <Wrapper>
            <input type="checkbox" />
            <Text>Show only my jobs</Text>
          </Wrapper>
        </Checkbox>
      </StyledJobSearch>
    </StyledSearch>
  );
};

export default Search;
