import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";
import { applyJob, retrieveJob, retrieveUser } from "../../api";
import {
  ArrowBack,
  ContainerDescription,
  GoBackText,
  Header,
  ImageStyled,
  StyledButton,
  ImageContainer,
  StyledLocation,
  StyledTextBodyDescription,
  StyledTextContainer,
  StyledTextDescription,
  Wrapper,
} from "./styled";

const Details = () => {
  const [job, setJob] = useState({});
  const [userRole, setUserRole] = useState();
  const { jobId } = useParams();
  const navigate = useNavigate();

  const back = () => navigate(-1);

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setUserRole(user.role);
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

  const handleClickApplyJob = () => {
    try {
      applyJob(sessionStorage.token, jobId)
        .then(() => alert("applied job"))
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <Wrapper>
        <Header>
          <GoBackText
            onClick={() => {
              back();
            }}
            color="white"
            variant="link"
          >
            <ArrowBack />
            Go back
          </GoBackText>
          <ImageContainer>
            <ImageStyled src={job.company?.avatar} alt="logo" />
          </ImageContainer>
        </Header>
        <Box marginTop="32px" padding="24px" flexDirection="column" gap="16px">
          <Text variant="subheading">{job.title}</Text>
          <StyledTextContainer>
            <StyledLocation variant="bodyBold">
              {job.company?.name}
            </StyledLocation>
            <Text>{job.location}</Text>
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
          {userRole === "candidate" ? (
            <StyledButton onClick={handleClickApplyJob}>Apply now</StyledButton>
          ) : (
            <StyledButton>Delete Job</StyledButton>
          )}
        </Box>
      </Wrapper>
    </Layout>
  );
};

export default Details;
