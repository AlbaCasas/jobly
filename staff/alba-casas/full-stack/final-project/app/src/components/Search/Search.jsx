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

const Search = ({ role }) => {
  return (
    <StyledSearch>
      <SearchForm>
        <StyledInputSearchBorder placeholder="Search by company or title" />
        <StyledInputSearch placeholder="Location" />
        <StyledInputSearch placeholder="Role type" />
        <StyledButtonSearch>Find Job</StyledButtonSearch>
      </SearchForm>
      {role === "company" ? (
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
      ) : (
        false
      )}
    </StyledSearch>
  );
};

export default Search;
