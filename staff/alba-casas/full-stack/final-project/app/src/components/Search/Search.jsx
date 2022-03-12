import { listJobs } from "../../api";
import {
  Checkbox,
  CheckboxStyled,
  Label,
  SearchForm,
  StyledButtonSearch,
  StyledInputSearch,
  StyledInputSearchBorder,
  StyledJobSearch,
  StyledSearch,
  Wrapper,
} from "./styled";

const Search = ({ role, setJobList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTitle = event.target[0].value;
    const queryLocation = event.target[1].value;
    const queryRole = event.target[2].value;
    listJobs(sessionStorage.token, {
      title: queryTitle,
      location: queryLocation,
      role: queryRole,
    }).then((jobs) => {
      setJobList(jobs);
    });
  };
  return (
    <StyledSearch>
      <SearchForm onSubmit={handleSubmit}>
        <StyledInputSearchBorder name="company" placeholder="Search by title" />
        <StyledInputSearch name="locacion" placeholder="Location" />
        <StyledInputSearch name="role" placeholder="Role type" />
        <StyledButtonSearch>Find Job</StyledButtonSearch>
      </SearchForm>
      {role === "company" ? (
        <StyledJobSearch>
          <Checkbox>
            <Wrapper>
              <CheckboxStyled id="jobs" type="checkbox" />
              <Label htmlFor="jobs">Show only my jobs</Label>
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
