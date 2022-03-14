import { listJobs } from "../../api";
import {
  Checkbox,
  CheckboxStyled,
  Label,
  FirstRow,
  StyledButtonSearch,
  StyledInputSearch,
  StyledInputSearchBorder,
  StyledJobSearch,
  StyledSearch,
  Wrapper,
  StyledSelectSearch,
} from "./styled";

const Search = ({ role, setJobList, userId }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTitle = event.target.title.value;
    const queryLocation = event.target.location.value;
    const queryRole = event.target.role.value;
    const isShowMyJobsChecked = event.target.company?.checked;
    listJobs(sessionStorage.token, {
      title: queryTitle,
      location: queryLocation,
      role: queryRole,
      company: isShowMyJobsChecked && userId,
    }).then((jobs) => {
      setJobList(jobs);
    });
  };
  return (
    <StyledSearch onSubmit={handleSubmit}>
      <FirstRow>
        <StyledInputSearchBorder name="title" placeholder="Search by title" />
        <StyledInputSearch name="location" placeholder="Location" />
        <StyledSelectSearch name="role" placeholder="Role type">
          <option value="" selected="selected">
            Select role
          </option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product">Product</option>
        </StyledSelectSearch>
        <StyledButtonSearch>Find Job</StyledButtonSearch>
      </FirstRow>
      {role === "company" && (
        <StyledJobSearch>
          <Checkbox>
            <Wrapper>
              <CheckboxStyled name="company" id="jobs" type="checkbox" />
              <Label htmlFor="jobs">Show only my jobs</Label>
            </Wrapper>
          </Checkbox>
        </StyledJobSearch>
      )}
    </StyledSearch>
  );
};

export default Search;
