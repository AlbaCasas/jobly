import React, { useEffect, useState } from 'react';
import Box from '../../components/Box';
import Layout from '../../components/Layout/Layout';
import {
  ContainerIcon,
  ContainerJobs,
  ContainerText,
  Heading,
  Subtitle,
  Title,
} from './styled';
import { MdWorkOutline } from 'react-icons/md';
import { listJobsFromCandidate } from '../../api';
import CandidaturesTable from './CandidaturesTable';

const JobListCandidate = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const listJobCandidate = async () => {
      try {
        const jobs = await listJobsFromCandidate(sessionStorage.token);
        setJobList(jobs);
      } catch (error) {
        alert(error.message);
      }
    };
    listJobCandidate();
  }, []);

  return (
    <Layout>
      <Heading>
        <Box justifyContent="space-between">
          <ContainerJobs>
            <ContainerIcon>
              <MdWorkOutline color="#2E66CC" />
            </ContainerIcon>
            <ContainerText>
              <Title>{jobList.length}</Title>
              <Subtitle>Jobs</Subtitle>
            </ContainerText>
          </ContainerJobs>
        </Box>
      </Heading>
      <CandidaturesTable jobList={jobList} />
    </Layout>
  );
};

export default JobListCandidate;
