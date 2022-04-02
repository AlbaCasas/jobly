import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import {
  CreateJobButton,
  Heading,
  TextDesktop,
  TextMobile,
  StyledJobHeadingCard,
} from './styled';
import { MdWorkOutline, MdPerson } from 'react-icons/md';
import Box from '../../components/Box';
import { listJobsFromCompany, retrieveJob } from '../../api';
import HeadingCard from './HeadingCard/HeadingCard';
import ModalJob from './ModalJob';
import ModalCandidates from './ModalCandidates';
import JobsTable from './JobsTable';

const JobListCompany = () => {
  const [jobList, setJobList] = useState([]);
  const [showModalJob, setShowModalJob] = useState();
  const [showModalCandidates, setShowModalCandidates] = useState();
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    const retrieveAndSetCompanyJobs = async () => {
      try {
        const job = await listJobsFromCompany(localStorage.token);
        setJobList(job);
      } catch (error) {
        alert(error.message);
      }
    };
    retrieveAndSetCompanyJobs();
  }, []);

  const totalCandidates =
    jobList.length > 0
      ? jobList.map((job) => job.candidatures.length).reduce((a, b) => a + b)
      : 0;

  const toggleCandidatesModal = () => {
    setShowModalCandidates(!showModalCandidates);
  };

  const closeModalCandidates = () => {
    setShowModalCandidates(false);
  };
  const toggleCreateJobModal = () => {
    setShowModalJob(!showModalJob);
  };

  const closeCreateJobModal = () => {
    setShowModalJob(false);
  };

  const onSelectJob = async (jobId) => {
    setSelectedJob(jobId);
    toggleCandidatesModal();
    try {
      const job = await retrieveJob(localStorage.token, jobId);
      setSelectedJob(job);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {!!showModalJob && (
        <ModalJob onClose={closeCreateJobModal} setJobList={setJobList} />
      )}
      {!!showModalCandidates && (
        <ModalCandidates
          onClose={closeModalCandidates}
          selectedJob={selectedJob}
        />
      )}

      <Layout>
        <Heading>
          <Box padding="24px" gap="16px" justifyContent="space-between">
            <HeadingCard
              title={totalCandidates}
              subtitle="Candidates"
              Icon={MdPerson}
            />
            <StyledJobHeadingCard
              title={jobList.length}
              subtitle="Postings"
              Icon={MdWorkOutline}
            />
            <CreateJobButton onClick={toggleCreateJobModal}>
              <TextMobile color="white">+</TextMobile>
              <TextDesktop color="white">Create Job</TextDesktop>
            </CreateJobButton>
          </Box>
        </Heading>
        <JobsTable onSelectJob={onSelectJob} jobList={jobList} />
      </Layout>
    </>
  );
};

export default JobListCompany;
