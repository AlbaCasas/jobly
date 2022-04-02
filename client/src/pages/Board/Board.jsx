import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { listJobs } from '../../api';
import Card from '../../components/Card';
import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search';
import Text from '../../components/Text';
import { Wrapper, StyledContainer } from './styled';
import Context from '../../Context';
import { DEFAULT_ERROR } from '../../constants/feedbacks';

const Board = () => {
  const { user, setFeedback } = useContext(Context);
  const [jobList, setJobList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const retrieveJobList = async () => {
      try {
        const job = await listJobs(sessionStorage.token, {});
        setJobList(job);
      } catch (error) {
        setFeedback(DEFAULT_ERROR);
      }
    };
    retrieveJobList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Search role={user?.role} userId={user?.id} setJobList={setJobList} />
        <StyledContainer>
          {!!jobList.length ? (
            jobList.map((job) => {
              const isCompany = job.company._id === user?.id ? true : null;
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
