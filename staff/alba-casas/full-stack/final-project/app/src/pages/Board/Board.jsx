import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { retrieveUser, listJobs } from "../../api";
import Card from "../../components/Card";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search";
import Text from "../../components/Text";
import Toast from "../../components/Toast";
import { Wrapper, StyledContainer } from "./styled";
import { MdDone } from "react-icons/md";

const Board = ({ toast, closeToast }) => {
  let isTokenValid = !!sessionStorage.token;
  const [jobList, setJobList] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setUser(user);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      listJobs(sessionStorage.token, {}).then((job) => {
        setJobList(job);
      });
    } catch ({ message }) {
      alert(message);
    }
  }, []);

  return !isTokenValid ? (
    <Navigate to="/login" />
  ) : (
    <Layout>
      {toast && (
        <Toast variant="success" icon={<MdDone />} closeToast={closeToast}>
          user created successfully
        </Toast>
      )}
      <Wrapper>
        <Search role={user.role} userId={user.id} setJobList={setJobList} />
        <StyledContainer>
          {!!jobList.length ? (
            jobList.map((job) => {
              const isCompany = job.company._id === user.id ? true : null;
              return (
                <Card
                  onClick={() => {
                    navigate(`/job/${job.id}`);
                  }}
                  key={job.id}
                  avatar={job.company.avatar}
                  title={job.title}
                  description={job.description}
                  role={job.role}
                  location={job.location}
                  candidatures={job.candidatures}
                  isCompany={isCompany}
                />
              );
            })
          ) : (
            <Text variant="subheading">No results</Text>
          )}
        </StyledContainer>
      </Wrapper>
    </Layout>
  );
};

export default Board;
