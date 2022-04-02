import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { useNavigate, Link } from "react-router-dom";
import { deleteJob, retrieveJob } from "../../api";
import {
  ArrowBack,
  ContainerDescription,
  GoBackText,
  Header,
  ImageStyled,
  StyledButton,
  StyledLocation,
  StyledTextBodyDescription,
  StyledTextContainer,
  StyledTextDescription,
  Wrapper,
  ContainerLeft,
  ContainerButton,
} from "./styled";
import moment from "moment";
import ModalApply from "./ModalApply";
import Context from "../../Context";
import ModalUpdateJob from "./ModalUpdateJob";
import { DEFAULT_ERROR } from "../../constants/feedbacks";

const Details = () => {
  const { setFeedback, user } = useContext(Context);
  const [job, setJob] = useState(null);
  const [isModalShow, setIsModalShow] = useState();
  const { jobId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchRetrieveJob = async () => {
      const job = await retrieveJob(sessionStorage.token, jobId);
      setJob(job);
    };
    fetchRetrieveJob();
  }, [jobId]);

  const toggleApplyModal = () => {
    setIsModalShow(!isModalShow);
  };
  const toggleModalJob = () => {
    setIsModalShow(!isModalShow);
  };

  const handleClickDeleteJob = async () => {
    try {
      await deleteJob(sessionStorage.token, jobId);
      setFeedback({
        message: "Job deleted successfully.",
        level: "success",
      });
      goBack();
    } catch (error) {
      setFeedback(DEFAULT_ERROR);
    }
  };

  const hasUserApplied = job?.candidatures.some((candidature) => {
    return candidature.candidate?._id === user.id;
  });

  return (
    <>
      {!!isModalShow && user.role === "candidate" && (
        <ModalApply onClose={toggleApplyModal} job={job} setJob={setJob} />
      )}

      {!!isModalShow && user.role === "company" && (
        <ModalUpdateJob onClose={toggleModalJob} job={job} setJob={setJob} />
      )}

      {job && (
        <Layout>
          <Wrapper>
            <Header>
              <GoBackText
                forwardedAs={Link}
                to={-1}
                color="white"
                variant="link"
              >
                <ArrowBack />
                Go back
              </GoBackText>
              <ImageStyled src={job.company.avatar} alt="logo" />
            </Header>
            <Box
              marginTop="32px"
              padding="24px"
              flexDirection="column"
              gap="16px"
            >
              <Text variant="subheading">{job.title}</Text>
              <StyledTextContainer>
                <ContainerLeft>
                  <StyledLocation variant="bodyBold">
                    {job.company.name}
                  </StyledLocation>
                  <Text>{job.location}</Text>
                </ContainerLeft>
                <Text>
                  Posted {moment(Date.now()).diff(moment(job.createAt), "days")}{" "}
                  days ago
                </Text>
              </StyledTextContainer>
              <Text>{job.date}</Text>
              <ContainerDescription>
                <StyledTextDescription variant="section">
                  Description
                </StyledTextDescription>
                <StyledTextBodyDescription>
                  {job.description}
                </StyledTextBodyDescription>
              </ContainerDescription>
              {user.role === "candidate" && (
                <StyledButton
                  disabled={hasUserApplied}
                  onClick={toggleApplyModal}
                >
                  {!!hasUserApplied ? "Registered" : "Apply now"}
                </StyledButton>
              )}
              {job.company?._id === user.id && (
                <ContainerButton gap="32px">
                  <StyledButton onClick={handleClickDeleteJob}>
                    Delete Job
                  </StyledButton>
                  <StyledButton onClick={toggleModalJob}>
                    Update Job
                  </StyledButton>
                </ContainerButton>
              )}
            </Box>
          </Wrapper>
        </Layout>
      )}
    </>
  );
};

export default Details;
