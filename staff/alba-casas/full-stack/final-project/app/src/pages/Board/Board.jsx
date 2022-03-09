import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { retrieveUser, listjobs } from "../../api";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Text from "../../components/Text";
import { Section, StyledContainer, View } from "./styled";

const Board = () => {
  let tokenValid = !!sessionStorage.token;
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [jobList, setJobList] = useState([]);

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [avatar, setAvatar] = useState();

  const showDropdown = () => {
    setIsDropdownShown(!isDropdownShown);
  };

  const closeDropdown = () => {
    if (isDropdownShown) {
      setIsDropdownShown(false);
    }
  };

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setName(user.name);
        setRole(user.role);
        setAvatar(user.avatar);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      listjobs(sessionStorage.token).then((job) => {
        setJobList(job);
      });
    } catch ({ message }) {
      alert(message);
    }
  }, []);

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav name={name} avatar={avatar} role={role} showDropdown={showDropdown}>
        Jobly
      </Nav>
      <Dropdown
        role={role}
        closeDropdown={closeDropdown}
        isShown={isDropdownShown}
      >
        Profile
      </Dropdown>
      <Section>
        <Search role={role} />
        <StyledContainer>
          {!!jobList.length ? (
            jobList.map((job) => {
              return (
                <Card
                  onClick={() => {
                    navigate(`/job/${job._id}`);
                  }}
                  key={job._id}
                  avatar={job.company.avatar}
                  title={job.title}
                  description={job.description}
                  role={job.role}
                  location={job.location}
                  candidates={job.candidates}
                />
              );
            })
          ) : (
            <Text variant="subheading">No results</Text>
          )}
        </StyledContainer>
      </Section>
    </View>
  );
};

export default Board;
