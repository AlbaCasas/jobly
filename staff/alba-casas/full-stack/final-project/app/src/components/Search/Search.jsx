import { listJobs } from "../../api";
import Select from "../Select";
import {
  Checkbox,
  CheckboxStyled,
  Label,
  FirstRow,
  StyledButtonSearch,
  StyledInputSearchBorder,
  StyledJobSearch,
  StyledSearch,
  Wrapper,
} from "./styled";
import { data } from "commons";

const { cities, roles } = data;

const Search = ({ role, setJobList, userId }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const queryTitle = event.target.title.value;
    const queryLocation = event.target.location.value;
    const queryRole = event.target.role.value;
    const isShowMyJobsChecked = event.target.company?.checked;
    const jobs = await listJobs(sessionStorage.token, {
      title: queryTitle,
      location: queryLocation,
      role: queryRole,
      company: isShowMyJobsChecked && userId,
    });
    setJobList(jobs);
  };
  return (
    <StyledSearch onSubmit={handleSubmit}>
      <FirstRow>
        <StyledInputSearchBorder name="title" placeholder="Search by title" />
        <Select name="location" placeholder="Location" options={cities} />
        <Select name="role" placeholder="Role type" options={roles} />
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
