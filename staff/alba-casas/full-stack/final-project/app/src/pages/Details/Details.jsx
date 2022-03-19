import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { useNavigate, Link } from "react-router-dom";
import { deleteJob, retrieveJob, retrieveUser } from "../../api";
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
} from "./styled";
import moment from "moment";
import ModalApply from "./ModalApply";

const Details = () => {
  const [job, setJob] = useState({});
  const [user, setUser] = useState({});
  const [isModalShow, setIsModalShow] = useState();
  const { jobId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

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
      retrieveJob(sessionStorage.token, jobId)
        .then((job) => {
          setJob(job);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, [jobId]);

  const toggleApplyModal = () => {
    setIsModalShow(!isModalShow);
  };

  const handleClickDeleteJob = () => {
    try {
      deleteJob(sessionStorage.token, jobId)
        .then(() => {
          alert("deleted job");
          goBack();
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
      {!!isModalShow && <ModalApply onClose={toggleApplyModal} jobId={jobId} />}
      <Layout>
        <Wrapper>
          <Header>
            <GoBackText forwardedAs={Link} to={-1} color="white" variant="link">
              <ArrowBack />
              Go back
            </GoBackText>
            <ImageStyled src={job.company?.avatar} alt="logo" />
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
                  {job.company?.name}
                </StyledLocation>
                <Text>{job.location}</Text>
              </ContainerLeft>
              <Text>Posted {moment(job.createAt).format("DD-MM-YYYY")}</Text>
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
            {user.role === "candidate" ? (
              <StyledButton onClick={toggleApplyModal}>Apply now</StyledButton>
            ) : (
              <StyledButton onClick={handleClickDeleteJob}>
                Delete Job
              </StyledButton>
            )}
          </Box>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Details;
