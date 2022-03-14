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
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Input from "../../components/Input";
import { createJob, listJobsFromCompany } from "../../api";
import HeadingCard from "./HeadingCard/HeadingCard";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const JobListCompany = () => {
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();

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

  const shouldShowModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
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

  return (
    <>
      {!!showModal && (
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
        </Modal>
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
            <CreateJobButton onClick={shouldShowModal}>
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
                <Row
                  onClick={() => {
                    navigate(`/job/${job._id}`);
                  }}
                  key={job._id}
                >
                  <TitleColumn>
                    <Text variant="caption">{job.title}</Text>
                  </TitleColumn>
                  <LocationColumn>
                    <Text variant="caption">{job.location}</Text>
                  </LocationColumn>
                  <RoleColumn>
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
