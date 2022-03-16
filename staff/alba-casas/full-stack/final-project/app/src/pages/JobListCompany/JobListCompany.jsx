import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  RowHeader,
  ImageCandidates,
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
  ContainerInput,
  Wrapper,
  InputDescription,
  ModalButton,
  StyledSelectSearch,
  HeaderModal,
  Icon,
  ModalCancelButton,
  ImageCandidatesModal,
  ModalCandidates,
  WrapperBox,
  CandidateColumnRow,
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Input from "../../components/Input";
import { createJob, listJobsFromCompany, retrieveJob } from "../../api";
import HeadingCard from "./HeadingCard/HeadingCard";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import CandidateRow from "./CandidateRow";

const JobListCompany = () => {
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate();
  const [showModalJob, setShowModalJob] = useState();
  const [showModalCandidates, setShowModalCandidates] = useState();
  const [selectJob, setSelectJob] = useState({});

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

  const createAJob = (event) => {
    event.preventDefault();

    const {
      target: {
        title: { value: title },
        role: { value: role },
        location: { value: location },
        description: { value: description },
      },
    } = event;

    try {
      createJob(sessionStorage.token, { title, role, location, description })
        .then(alert("job created"))
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const onSelectJob = (jobId) => {
    setSelectJob(jobId);
    shouldShowModalCandidates();
    try {
      retrieveJob(sessionStorage.token, jobId)
        .then((job) => {
          setSelectJob(job);
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
      {!!showModalJob ? (
        <Modal onSubmit={createAJob}>
          <HeaderModal>
            <Text variant="subheading">Create a new job posting</Text>
            <Icon onClick={closeModal} />
          </HeaderModal>
          <ContainerInput>
            <Input name="title" placeholder="Job title" />
            <Wrapper>
              <StyledSelectSearch name="role" placeholder="Role type">
                <option value="" selected="selected">
                  I'm looking for a
                </option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="product">Product</option>/
              </StyledSelectSearch>
              <Input name="location" placeholder="Location" />
            </Wrapper>
            <InputDescription name="description" placeholder="Description" />
          </ContainerInput>
          <ModalButton>Create job posting</ModalButton>
          <ModalCancelButton onClick={closeModal}>Cancel</ModalCancelButton>
        </Modal>
      ) : (
        !!showModalCandidates && (
          <ModalCandidates>
            <HeaderModal>
              <Box alignItems="center" flexDirection="column" gap="24px">
                <Box gap="12px" alignItems="center">
                  <Text variant="subheading">{selectJob.title} </Text>
                  <Text variant="subheading">-</Text>
                  <Text variant="subheading"> {selectJob.company?.name} </Text>
                </Box>
                <Box>
                  <Text variant="section">List of candidates</Text>
                </Box>
                <WrapperBox
                  gap="280px"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box flexDirection="column" gap="24px">
                    {!!selectJob.candidatures?.length &&
                      selectJob.candidatures?.map((candidature) => {
                        return (
                          <CandidateRow>
                            <Box alignItems="center">
                              <Box alignItems="center" gap="24px">
                                <ImageCandidatesModal
                                  key={candidature.candidate._id}
                                  src={candidature.candidate.avatar}
                                />
                                <CandidateColumnRow>
                                  <Text variant="caption-bold">
                                    {candidature.candidate?.name}
                                  </Text>
                                </CandidateColumnRow>
                                <CandidateColumnRow>
                                  <TextDesktop variant="caption-bold">
                                    {candidature.candidate?.email}
                                  </TextDesktop>
                                </CandidateColumnRow>
                              </Box>
                              <Box
                                alignItems="center"
                                justifyContent="flex-end"
                                width="100px"
                                gap="48px"
                              >
                                <CandidateColumnRow>
                                  <TextDesktop variant="caption-bold">
                                    {candidature.candidate?.phone}
                                  </TextDesktop>
                                </CandidateColumnRow>
                                <CandidateColumnRow>
                                  <Text variant="link">resume</Text>
                                </CandidateColumnRow>
                              </Box>
                            </Box>
                          </CandidateRow>
                        );
                      })}
                  </Box>
                  <ModalCancelButton onClick={closeModalCandidates}>
                    Cancel
                  </ModalCancelButton>
                </WrapperBox>
              </Box>
              <Icon onClick={closeModalCandidates} />
            </HeaderModal>
          </ModalCandidates>
        )
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
                              <ImageCandidates
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
