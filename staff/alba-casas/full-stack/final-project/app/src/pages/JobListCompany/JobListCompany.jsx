import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  RowHeader,
  Avatar,
  CreateJobButton,
  Row,
  CandidatesWrapper,
  Heading,
  Table,
  TextDesktop,
  TextMobile,
  StyledJobHeadingCard,
  TitleColumn,
  LocationColumn,
  RoleColumn,
  CandidateColumn,
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { listJobsFromCompany, retrieveJob } from "../../api";
import HeadingCard from "./HeadingCard/HeadingCard";
import { useNavigate } from "react-router-dom";
import ModalJob from "./ModalJob";
import ModalCandidates from "./ModalCandidates";

const JobListCompany = () => {
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate();
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

  const shouldShowModalCandidates = () => {
    setShowModalCandidates(!showModalCandidates);
  };

  const closeModalCandidates = () => {
    setShowModalCandidates(false);
  };
  const shouldShowModalJob = () => {
    setShowModalJob(!showModalJob);
  };

  const closeModal = () => {
    setShowModalJob(false);
  };

  const onSelectJob = (jobId) => {
    setSelectedJob(jobId);
    shouldShowModalCandidates();
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
      {!!showModalJob && <ModalJob onClose={closeModal} />}
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
            <CreateJobButton onClick={shouldShowModalJob}>
              <TextMobile color="white">+</TextMobile>
              <TextDesktop color="white">Create Job</TextDesktop>
            </CreateJobButton>
          </Box>
        </Heading>
        <Table>
          <RowHeader>
            <TitleColumn>
              <Text variant="caption-bold">Title</Text>
            </TitleColumn>
            <LocationColumn>
              <Text variant="caption-bold">Location</Text>
            </LocationColumn>
            <RoleColumn>
              <Text variant="caption-bold">Role</Text>
            </RoleColumn>
            <CandidateColumn>
              <Text variant="caption-bold">Candidates</Text>
            </CandidateColumn>
          </RowHeader>
          {!!jobList.length &&
            jobList.map((job) => {
              return (
                <Row key={job.id}>
                  <TitleColumn
                    onClick={() => {
                      navigate(`/job/${job.id}`);
                    }}
                  >
                    <Text variant="caption">{job.title}</Text>
                  </TitleColumn>
                  <LocationColumn
                    onClick={() => {
                      navigate(`/job/${job.id}`);
                    }}
                  >
                    <Text variant="caption">{job.location}</Text>
                  </LocationColumn>
                  <RoleColumn
                    onClick={() => {
                      navigate(`/job/${job.id}`);
                    }}
                  >
                    <Text variant="caption">{job.role}</Text>
                  </RoleColumn>
                  <CandidateColumn>
                    <CandidatesWrapper>
                      <Text variant="caption-bold">
                        {job.candidatures.length}
                      </Text>
                      {!!job.candidatures.length &&
                        job.candidatures.map((candidature) => {
                          return (
                            <>
                              <Avatar
                                onClick={() => onSelectJob(job.id)}
                                key={candidature.candidate._id}
                                src={candidature.candidate.avatar}
                              />
                            </>
                          );
                        })}
                    </CandidatesWrapper>
                  </CandidateColumn>
                </Row>
              );
            })}
        </Table>
      </Layout>
    </>
  );
};

export default JobListCompany;
