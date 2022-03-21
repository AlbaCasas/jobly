import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  CreateJobButton,
  Heading,
  TextDesktop,
  TextMobile,
  StyledJobHeadingCard,
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";

import { listJobsFromCompany, retrieveJob } from "../../api";
import HeadingCard from "./HeadingCard/HeadingCard";
import ModalJob from "./ModalJob";
import ModalCandidates from "./ModalCandidates";
import JobsTable from "./JobsTable";
import { MdDone, MdOutlineError } from "react-icons/md";
import Toast from "../../components/Toast";

const JobListCompany = ({ toast, setToast, closeToast }) => {
  const [jobList, setJobList] = useState([]);
  const [showModalJob, setShowModalJob] = useState();
  const [showModalCandidates, setShowModalCandidates] = useState();
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    try {
      listJobsFromCompany(sessionStorage.token).then((job) => {
        setJobList(job);
      });
    } catch (error) {
      alert(error.message);
    }
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

  const onSelectJob = (jobId) => {
    setSelectedJob(jobId);
    toggleCandidatesModal();
    try {
      retrieveJob(sessionStorage.token, jobId)
        .then((job) => {
          setSelectedJob(job);
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {!!showModalJob && (
        <ModalJob onClose={closeCreateJobModal} setToast={setToast} />
      )}
      {!!showModalCandidates && (
        <ModalCandidates
          onClose={closeModalCandidates}
          selectedJob={selectedJob}
        />
      )}
      {!!toast && (
        <Toast variant="success" icon={<MdDone />} closeToast={closeToast}>
          Job created successfully
        </Toast>
      )}
      {toast === "error" && (
        <Toast
          variant="error"
          icon={<MdOutlineError />}
          closeToast={closeToast}
        >
          Uh oh, there was a problem with your request.
        </Toast>
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
